"use client";

import React, { useRef } from "react";
import {
  ActionContainer,
  BoxContainer,
  ImageContainer,
  PageContainer,
  StampContainer,
  StampText,
  Title,
} from "./HomePage.style";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { CropUpload } from "@/components/CropUpload";
import {
  AddPhotoAlternateTwoTone,
  DownloadRounded,
  RestartAltRounded,
  Share as ShareIcon,
} from "@mui/icons-material";
import { MuiColorInput } from "mui-color-input";
import { TextInput } from "@/components/TextInput";
import { CurvedInsideText } from "@/components/CurvedInsideText";
import html2canvas from "html2canvas";

interface IFormValues {
  image: string;
  stamp: string;
  stampBgColor: string;
  stampTextColor: string;
  format: "circle" | "square";
}

const getDefaultValuesFromURL = (): IFormValues => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    image: "",  // Não carregamos a imagem da URL
    stamp: urlParams.get("stamp") || "#OpenToWork",
    stampBgColor: urlParams.get("stampBgColor") || "#4B9429",
    stampTextColor: urlParams.get("stampTextColor") || "#FFFFFF",
    format: (urlParams.get("format") as "circle" | "square") || "circle",
  };
};

const defaultValues: IFormValues = getDefaultValuesFromURL();

const generateShareableURL = (values: IFormValues) => {
  const url = new URL(window.location.href);
  url.searchParams.set("stamp", values.stamp);
  url.searchParams.set("stampBgColor", values.stampBgColor);
  url.searchParams.set("stampTextColor", values.stampTextColor);
  url.searchParams.set("format", values.format);
  return url.toString();
};

export const HomePage = () => {
  const methods = useForm<IFormValues>({ defaultValues });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const onReset = () => {
    methods.reset(getDefaultValuesFromURL());
  };

  const image = methods.watch("image");
  const stamp = methods.watch("stamp");
  const stampBgColor = methods.watch("stampBgColor");
  const stampTextColor = methods.watch("stampTextColor");
  const format = methods.watch("format");

  const onChangeBgColor = (color: string) => {
    methods.setValue("stampBgColor", color.toUpperCase());
  };

  const onChangeTextColor = (color: string) => {
    methods.setValue("stampTextColor", color.toUpperCase());
  };

  const handleDownload = async () => {
    if (imageContainerRef.current) {
      try {
        const canvas = await html2canvas(imageContainerRef.current, {
          backgroundColor: null,
          useCORS: true,
          scale: 2,
        });

        const dataUrl = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.download = `stamp-${new Date().getTime()}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Erro ao gerar a imagem:", error);
      }
    }
  };

  const handleShare = () => {
    const shareableURL = generateShareableURL(methods.getValues());
    navigator.clipboard.writeText(shareableURL).then(() => {
      alert("URL copiada para a área de transferência!");
    });
  };

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <Title variant={isMobile ? "h5" : "h4"}>
          Gere sua imagem de perfil
        </Title>
        <BoxContainer>
          <ImageContainer
            ref={imageContainerRef}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: format === "circle" ? "50%" : "10px",
            }}
          >
            {!image ? (
              <CropUpload
                title="Selecione uma imagem"
                elementAction={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      p: 2,
                      gap: 1,
                      color: "text.secondary",
                    }}
                  >
                    <IconButton
                      color="primary"
                      size={isMobile ? "medium" : "large"}
                    >
                      <AddPhotoAlternateTwoTone
                        fontSize={isMobile ? "medium" : "large"}
                      />
                    </IconButton>
                    <Typography variant={isMobile ? "body2" : "body1"}>
                      Adicionar imagem
                    </Typography>
                  </Box>
                }
                name="image"
              />
            ) : (
              <>
                {format === "circle" ? (
                  <CurvedInsideText
                    text={stamp}
                    radius={isMobile ? 70 : isTablet ? 80 : 90}
                    startAngle={170}
                    charRotation={270}
                    kerning={isMobile ? 6 : 8}
                    fontSize={isMobile ? 24 : isTablet ? 28 : 32}
                    fontWeight={700}
                    textColor={stampTextColor}
                    backgroundColor={stampBgColor}
                  />
                ) : (
                  <StampContainer color={stampBgColor}>
                    <StampText color={stampTextColor}>{stamp}</StampText>
                  </StampContainer>
                )}
              </>
            )}
          </ImageContainer>
        </BoxContainer>
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          fontWeight={600}
          align="center"
        >
          Personalize seu selo
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: 500,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            p: 1,
            gap: 1,
            position: "relative",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              top: -10,
              left: 12,
              color: "text.secondary",
              backgroundColor: "background.paper",
              padding: "0 4px",
              borderRadius: 1,
            }}
          >
            Formato
          </Typography>
          <RadioGroup
            row
            value={format}
            onChange={(e) =>
              methods.setValue("format", e.target.value as "circle" | "square")
            }
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <FormControlLabel
              value="circle"
              control={<Radio />}
              label="Circle"
            />
            <FormControlLabel
              value="square"
              control={<Radio />}
              label="Square"
            />
          </RadioGroup>
        </Box>

        <ActionContainer>
          <TextInput
            label="Texto do selo"
            name="stamp"
            fullWidth
            size={isMobile ? "small" : "medium"}
          />
        </ActionContainer>
        <ActionContainer>
          <MuiColorInput
            format="rgb"
            value={stampBgColor}
            label="Cor do selo"
            onChange={onChangeBgColor}
            fullWidth
            size={isMobile ? "small" : "medium"}
          />

          <MuiColorInput
            format="hex"
            value={stampTextColor}
            label="Cor do texto"
            onChange={onChangeTextColor}
            fullWidth
            size={isMobile ? "small" : "medium"}
          />
        </ActionContainer>

        <ActionContainer>
          <Button
            variant="outlined"
            fullWidth
            color="error"
            onClick={onReset}
            startIcon={<RestartAltRounded />}
            size={isMobile ? "small" : "medium"}
          >
            Limpar
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleDownload}
            disabled={!image}
            startIcon={<DownloadRounded />}
            size={isMobile ? "small" : "medium"}
          >
            Download
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            onClick={handleShare}
            startIcon={<ShareIcon />}
            size={isMobile ? "small" : "medium"}
          >
            Compartilhar
          </Button>
        </ActionContainer>
      </PageContainer>
    </FormProvider>
  );
};

"use client";

import React, { useRef } from "react";
import {
  ActionContainer,
  BoxContainer,
  ImageContainer,
  PageContainer,
  Title,
} from "./HomePage.style";
import {
  Box,
  Button,
  IconButton,
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
}

const defaultValues: IFormValues = {
  image: "",
  stamp: "#OpenToWork",
  stampBgColor: "#4B9429",
  stampTextColor: "#FFFFFF",
};

export const HomePage = () => {
  const methods = useForm<IFormValues>({ defaultValues });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const onReset = () => {
    methods.reset(defaultValues);
  };

  const image = methods.watch("image");
  const stamp = methods.watch("stamp");
  const stampBgColor = methods.watch("stampBgColor");
  const stampTextColor = methods.watch("stampTextColor");

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

        const dataUrl = canvas.toDataURL("image/jpeg", 1.0);
        const link = document.createElement("a");
        link.download = `stamp-${new Date().getTime()}.jpg`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Erro ao gerar a imagem:", error);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <Title variant={isMobile ? "h5" : "h4"}>
          Gere sua imagem de perfil
        </Title>
        <BoxContainer ref={imageContainerRef}>
          <ImageContainer
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
        </ActionContainer>
      </PageContainer>
    </FormProvider>
  );
};

"use client";

import React, { useMemo, useRef, Suspense } from "react";
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
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { CropUpload } from "@/components/CropUpload";
import {
  AddPhotoAlternateTwoTone,
  DownloadRounded,
  RestartAltRounded,
  ShareRounded,
} from "@mui/icons-material";
import { MuiColorInput } from "mui-color-input";
import { TextInput } from "@/components/TextInput";
import { CurvedInsideText } from "@/components/CurvedInsideText";
import html2canvas from "html2canvas";
import { useSearchParams } from "next/navigation";

interface IFormValues {
  image: string;
  stamp: string;
  stampBgColor: string;
  stampTextColor: string;
  format: "circle" | "square";
}

function HomePageContent() {
  const searchParams = useSearchParams();
  const [showShareSuccess, setShowShareSuccess] = React.useState(false);

  const defaultValues: IFormValues = useMemo(() => {
    return {
      image: "",
      stamp: searchParams.get("stamp")
        ? decodeURIComponent(searchParams.get("stamp") || "#OPENTOWORK")
        : "#OPENTOWORK",
      stampBgColor: searchParams.get("bgColor")
        ? decodeURIComponent(searchParams.get("bgColor") || "#4B9429")
        : "#4B9429",
      stampTextColor: searchParams.get("textColor")
        ? decodeURIComponent(searchParams.get("textColor") || "#FFFFFF")
        : "#FFFFFF",
      format: searchParams.get("format")
        ? (decodeURIComponent(searchParams.get("format") || "") as
            | "circle"
            | "square")
        : "circle",
    };
  }, [searchParams]);

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

  const generateShareUrl = () => {
    const params = new URLSearchParams();
    if (stamp) params.append("stamp", encodeURIComponent(stamp));
    if (stampBgColor)
      params.append("bgColor", encodeURIComponent(stampBgColor));
    if (stampTextColor)
      params.append("textColor", encodeURIComponent(stampTextColor));
    if (format) params.append("format", encodeURIComponent(format));

    const shareUrl = `${window.location.origin}${
      window.location.pathname
    }?${params.toString()}`;
    return shareUrl;
  };

  const handleShare = async () => {
    const shareUrl = generateShareUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowShareSuccess(true);
    } catch (error) {
      console.error("Erro ao copiar URL:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <Snackbar
          open={showShareSuccess}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setShowShareSuccess(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            O link para o seu template já foi copiado! Agora mande para os seus
            amigos criarem as fotos com o seu selo.
          </Alert>
        </Snackbar>
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
            helperText="Máximo de 35 caracteres"
            slotProps={{
              input: {
                inputProps: {
                  maxLength: 35,
                },
              },
            }}
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
        <ActionContainer>
          <Button
            variant="outlined"
            fullWidth
            color="info"
            onClick={handleShare}
            disabled={!image}
            startIcon={<ShareRounded />}
            size={isMobile ? "small" : "medium"}
          >
            Compartilhar Template
          </Button>
        </ActionContainer>
      </PageContainer>
    </FormProvider>
  );
}

export const HomePage = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <HomePageContent />
    </Suspense>
  );
};

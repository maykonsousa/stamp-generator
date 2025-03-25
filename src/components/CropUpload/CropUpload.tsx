"use client";

import React, { useState, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { AddPhotoAlternateTwoTone } from "@mui/icons-material";
import { Dialog } from "../Dialog";

interface DragCropImageProps {
  title?: string;
  typeImg?: "avatar" | "cover" | "project";
  elementAction: React.ReactElement;
  name: string;
  onConfirm?: () => void;
}

const sizeEnum = {
  avatar: { width: 350, height: 350 },
  cover: { width: 800, height: 200 },
  project: { width: 540, height: 270 },
};

export function CropUpload({
  title,
  typeImg = "avatar",
  elementAction,
  name,
  onConfirm,
}: DragCropImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const cropperRef = useRef<ReactCropperElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { width, height } = sizeEnum[typeImg];
  const { setValue, control } = useFormContext();

  // Cálculo de dimensões responsivas
  const responsiveWidth = isMobile
    ? Math.min(width, window.innerWidth - 40)
    : width;
  const responsiveHeight = isMobile
    ? (responsiveWidth * height) / width
    : height;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const cropImage = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const croppedDataURL = cropper
        .getCroppedCanvas({ width, height })
        .toDataURL();

      if (croppedDataURL) {
        setImageSrc(null);
        setValue(name, croppedDataURL);
        onConfirm?.();
      }
    }
  }, [setValue, name, onConfirm, width, height]);

  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <Dialog
          title={title}
          elementAction={elementAction}
          onConfirm={cropImage}
          confirmText="Salvar"
          dismissText="Cancelar"
          disabled={!imageSrc}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              px: { xs: 1, sm: 2 },
              py: { xs: 2, sm: 3 },
            }}
          >
            {!imageSrc ? (
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: "8px",
                  padding: { xs: "10px", sm: "15px", md: "20px" },
                  textAlign: "center",
                  cursor: "pointer",
                  width: "100%",
                  height: { xs: 200, sm: 250, md: responsiveHeight },
                  maxWidth: { xs: "100%", md: responsiveWidth },
                  margin: "0 auto",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <input {...getInputProps()} />
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  sx={{ mb: 1 }}
                >
                  Arraste e solte uma imagem ou clique para selecionar
                </Typography>
                <AddPhotoAlternateTwoTone
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    color: "text.secondary",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "primary.main" },
                  }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Cropper
                  src={imageSrc}
                  ref={cropperRef}
                  style={{
                    height: responsiveHeight,
                    width: responsiveWidth,
                    maxWidth: "100%",
                  }}
                  aspectRatio={width / height}
                  guides={true}
                  viewMode={1}
                  responsive={true}
                  alt="Imagem para recorte"
                  zoomable={true}
                  scalable={true}
                />
                <Button
                  onClick={() => setImageSrc(null)}
                  sx={{
                    marginTop: { xs: 1, sm: 2 },
                    width: { xs: "100%", sm: "auto" },
                  }}
                  variant="outlined"
                  color="error"
                  size={isMobile ? "small" : "medium"}
                  aria-label="Limpar imagem"
                >
                  Limpar
                </Button>
              </Box>
            )}
          </Box>
        </Dialog>
      )}
    />
  );
}

"use client";

import React, { useState, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Box, Button } from "@mui/material";
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

  const { width, height } = sizeEnum[typeImg];
  const { setValue, control } = useFormContext();

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
              maxWidth: { xs: "100%", md: width * 1.5 },
              maxHeight: { xs: height * 1.5, md: height },
            }}
          >
            {!imageSrc ? (
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed #ccc",
                  padding: { xs: "10px", md: "20px" },
                  textAlign: "center",
                  cursor: "pointer",
                  width: { xs: "100%", md: width },
                  height: { xs: height - 30, md: height },
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <input {...getInputProps()} />
                <p>Arraste e solte uma imagem ou clique para selecionar</p>
                <AddPhotoAlternateTwoTone
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
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
                }}
              >
                <Cropper
                  src={imageSrc}
                  ref={cropperRef}
                  style={{
                    height,
                    width,
                  }}
                  aspectRatio={width / height}
                  guides={false}
                  viewMode={1}
                  alt="Imagem para recorte"
                />
                <Button
                  onClick={() => setImageSrc(null)}
                  sx={{ marginTop: "10px" }}
                  variant="outlined"
                  color="error"
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

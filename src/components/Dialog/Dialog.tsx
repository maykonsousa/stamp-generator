/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Dialog as MuiDialog,
  Slide,
  SlideProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface IFormState {
  isValid: boolean;
}

interface IDialogProps extends Partial<DialogProps> {
  elementAction: React.ReactElement<any>;
  children: React.ReactNode;
  title?: string;
  open?: boolean;
  onOpen?: () => void;
  disabled?: boolean;
  formState?: IFormState;
  onConfirm?: () => Promise<void> | void;
  onDismiss?: () => void;
  loading?: boolean;
  confirmText?: string;
  dismissText?: string;
  hideActions?: boolean;
}

const Transition = React.forwardRef(
  (
    props: SlideProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
        zIndex: 1000,
        color: "text.primary",
      }}
    >
      <Close />
    </IconButton>
  );
}

export function Dialog({
  elementAction,
  children,
  title,
  onOpen,
  open = false,
  onConfirm,
  onDismiss,
  loading,
  disabled = false,
  confirmText = "Confirmar",
  dismissText = "Cancelar",
  formState,
  hideActions,
}: IDialogProps) {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
    onOpen?.();
  };

  const handleCancel = () => {
    handleClose();
    onDismiss?.();
  };

  const handleConfirm = async () => {
    await onConfirm?.();

    if (formState?.isValid === false) {
      return;
    }
    handleClose();
  };
  return (
    <>
      {React.cloneElement(elementAction, { onClick: handleOpen })}
      <MuiDialog
        open={open || show}
        slots={{
          transition: Transition,
        }}
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "500px" },
          margin: { xs: "0", md: "auto" },
          padding: { xs: "0", md: "20px" },
        }}
        onClose={handleCancel}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <CloseButton onClick={handleCancel} />
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "200px",
            minWidth: isMobile ? "100%" : "500px",
          }}
        >
          {loading ? (
            <Box>
              <CircularProgress size={92} />
            </Box>
          ) : (
            children
          )}
        </DialogContent>
        {!hideActions && (
          <DialogActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2,
            }}
          >
            <Button
              onClick={handleCancel}
              color="error"
              variant="outlined"
              sx={{
                width: { xs: "100%", md: "auto" },
              }}
            >
              {dismissText}
            </Button>
            <Button
              onClick={handleConfirm}
              color="primary"
              variant="contained"
              disabled={disabled}
              sx={{
                width: { xs: "100%", md: "auto" },
              }}
            >
              {confirmText}
            </Button>
          </DialogActions>
        )}
      </MuiDialog>
    </>
  );
}

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
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: { xs: "95%", sm: "90%", md: "500px" },
            margin: { xs: "10px", md: "auto" },
            borderRadius: { xs: "8px", md: "12px" },
            overflowY: "auto",
          },
        }}
        fullScreen={isMobile}
        fullWidth
        onClose={handleCancel}
      >
        {title && (
          <DialogTitle sx={{ pt: { xs: 2, md: 3 }, px: { xs: 2, md: 3 } }}>
            {title}
          </DialogTitle>
        )}
        <CloseButton onClick={handleCancel} />
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: { xs: "150px", md: "200px" },
            p: { xs: 2, md: 3 },
            overflowX: "hidden",
          }}
        >
          {loading ? (
            <Box>
              <CircularProgress size={isMobile ? 64 : 92} />
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
              justifyContent: { xs: "space-between", md: "flex-end" },
              gap: { xs: 1, md: 2 },
              p: { xs: 2, md: 2 },
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
            }}
          >
            <Button
              onClick={handleCancel}
              color="error"
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "auto" },
                mb: { xs: 1, sm: 0 },
                order: { xs: 2, sm: 1 },
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
                width: { xs: "100%", sm: "auto" },
                order: { xs: 1, sm: 2 },
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

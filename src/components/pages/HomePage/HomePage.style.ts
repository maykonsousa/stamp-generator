import { Box, styled, Typography } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
`;

export const Title = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
`;

export const ImageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

export const ActionContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;

interface StampContainerProps {
  color: string;
}

interface StampTextProps {
  color: string;
}

export const StampContainer = styled(Box)<StampContainerProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle at center,
      ${({ color }) => color} 70%,
      ${({ color }) => color}aa 85%,
      transparent 100%
    );
    padding: 0.5rem 1.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
   
`;

export const StampText = styled(Typography)<StampTextProps>`
  color: ${({ color }) => color};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
`
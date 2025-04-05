import { Box, styled, Typography } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;  
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

export const Title = styled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  border: 2px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 0.75rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`;

export const ActionContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

interface StampContainerProps {
  color: string;
}

interface StampTextProps {
  color: string;
}

export const StampContainer = styled(Box)<StampContainerProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle at center,
      ${({ color }) => color} 70%,
      ${({ color }) => color} 85%,
      transparent 100%
    );
    padding: 0.5rem 2.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;

export const StampText = styled(Typography)<StampTextProps>`
  color: ${({ color }) => color};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`
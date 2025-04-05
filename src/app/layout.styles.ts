'use client';

import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;


  @media (max-width: 768px) {
    padding: 0 8px;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const DefaultLayoutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 1rem;
  position: relative;
  height: 100%;
  flex: 1;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

export const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  width: 100%;
  margin-top: 90px;
  @media (max-width: 768px) {
    padding: 0 8px;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
  }

  @media (max-width: 1400px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;


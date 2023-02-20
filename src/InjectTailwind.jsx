import { StyledEngineProvider } from '@mui/material';
import React from 'react';

const InjectTailwind = ({ children }) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default InjectTailwind;

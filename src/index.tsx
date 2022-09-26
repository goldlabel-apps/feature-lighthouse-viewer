import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { featuresStore } from './features/featuresStore';
import {
  Container,
  createTheme, 
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { 
  Shared,
} from "./features/Shared";
import {theme} from "./features/LighthouseViewer/theme";
import {LighthouseViewer} from "./features";

console.warn(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION} ${process.env.REACT_APP_ENV}`);

export const getFeaturesStore = () => { return featuresStore }

const root = ReactDOM.createRoot(
  document.getElementById('feature-lighthouse-viewer') as HTMLElement
)

root.render(
  <React.Fragment>
      <Provider store={ featuresStore }>
        <ThemeProvider theme={createTheme(theme())}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Shared />
            <LighthouseViewer />
          </Container>
        </ThemeProvider>
      </Provider>
  </React.Fragment>
)


import React from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';

import HomePage from "./components/HomePage/HomePage";
import OrganizationsPage from "./components/OrganizationsPage";
import OrganizationLoginPage from "./components/OrganizationLoginPage/OrganizationLoginPage";
import OrganizationSignUpPage from './components/OrganizationSignupPage/OrganizationSignupPage';

// Material UI Overrides
const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
    button: {
      textTransform: "none",
    }
  },
  palette: {
    primary: {
      main: "#F56767",
    },
    secondary: {
      main: "#F56767"
    },
  },
  overrides: {
    MuiButton: {
      outlinedSizeLarge: {
        height: "56px",
        padding: "0px 40px",
        borderWidth: "2px"
      }
    },
    MuiTypography: {
      h1: {
        fontFamily: "Gangster Grotesk",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "42px",
        lineHeight: "54px",
        letterSpacing: "0.02em",
        color: "#212633",
        marginBottom: "24px",
      },
      h2: {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "26px",
        lineHeight: "35px",
        letterSpacing: "0.02em",
        color: "#384555",
        marginBottom: "18px"
      },
      h3: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "27px",
        letterSpacing: "0.02em",
        color: "#384555",
        marginBottom: "10px",
      },
      h4: {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.02em",
        color: "#384555",
      },
      body1: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "28px",
        letterSpacing: "0.02em",
        color: "#384555",
      },
    }
  }
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/organizations" component={OrganizationsPage} />
        <Route path="/organization/login" component={OrganizationLoginPage} />
        <Route path="/organization/signup" component={OrganizationSignUpPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </MuiThemeProvider>
  )
}
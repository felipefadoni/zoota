import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d86825", // Laranja Terracota da imagem
      light: "#f28a4a",
      dark: "#b35118",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3a332e", // Cinza/Marrom escuro da imagem
      contrastText: "#ffffff",
    },
    background: {
      default: "#fdfbf9", // Fundo off-white puxado pro bege
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#777777",
    },
  },
  typography: {
    fontFamily: '"Geist", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          border: "1px solid #e0e0e0",
        },
      },
    },
  },
});

export default theme;

import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const COLORS = {
  dark: "#1E1A18",
  light: "#FAF8F5",
  white: "#FFFFFF",
  accent: "#C59B76",
  accentHover: "#B08560",
  textMain: "#332E2C",
  textLight: "#8A817C",
  border: "#E6DFD9",
};

export default function Header() {
  return (
    <AppBar component="header" position="absolute" elevation={0} sx={{ backgroundColor: "transparent", pt: 2 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: "0 !important" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 32, height: 32, backgroundColor: COLORS.accent, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ color: COLORS.white, fontWeight: "bold", fontSize: "18px", lineHeight: 1 }}>Z</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.white, letterSpacing: "0.5px" }}>
              ZooTa
            </Typography>
          </Box>

          <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
            <Link href="/recursos" style={{ textDecoration: "none", color: "rgba(255,255,255,0.8)", fontSize: "15px", fontWeight: 500 }}>
              Recursos
            </Link>
            <Link href="/beneficios" style={{ textDecoration: "none", color: "rgba(255,255,255,0.8)", fontSize: "15px", fontWeight: 500 }}>
              Benefícios
            </Link>
            <Link href="/contato" style={{ textDecoration: "none", color: "rgba(255,255,255,0.8)", fontSize: "15px", fontWeight: 500 }}>
              Contato
            </Link>
            <Link href="/app/authentication/login" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: COLORS.white,
                  borderColor: "rgba(255,255,255,0.3)",
                  borderRadius: "30px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": { borderColor: COLORS.white, backgroundColor: "rgba(255,255,255,0.05)" },
                }}
                variant="outlined"
              >
                Entrar
              </Button>
            </Link>
          </Box>

          <IconButton sx={{ display: { md: "none" }, color: COLORS.white }} aria-label="Menu de navegação">
            <FiMenu />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

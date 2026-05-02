import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Recursos", path: "/recursos" },
    { label: "Benefícios", path: "/beneficios" },
    { label: "Planos", path: "/planos" },
    { label: "Contato", path: "/contato" },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center", backgroundColor: COLORS.dark, height: "100%", color: COLORS.white, pt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 3, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ width: 32, height: 32, backgroundColor: COLORS.accent, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ color: COLORS.white, fontWeight: "bold", fontSize: "18px", lineHeight: 1 }}>Z</Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.white, letterSpacing: "0.5px" }}>
            ZooTa
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: COLORS.white }}>
          <FiX />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
            <Link href={item.path} style={{ textDecoration: "none", width: "100%" }} onClick={handleDrawerToggle}>
              <ListItemText
                primary={item.label}
                sx={{
                  textAlign: "left",
                  color: "rgba(255,255,255,0.8)",
                  "& .MuiTypography-root": { fontSize: "1.2rem", fontWeight: 500 },
                }}
              />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 4 }}>
          <Link href="/app/authentication/login" style={{ textDecoration: "none", width: "100%" }} onClick={handleDrawerToggle}>
            <Button
              fullWidth
              sx={{
                color: COLORS.white,
                backgroundColor: COLORS.accent,
                borderRadius: "12px",
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: COLORS.accentHover },
              }}
            >
              Entrar no Sistema
            </Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar component="header" position="absolute" elevation={0} sx={{ backgroundColor: "transparent", pt: { xs: 1, md: 2 } }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: "0 !important" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 32, height: 32, backgroundColor: COLORS.accent, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ color: COLORS.white, fontWeight: "bold", fontSize: "18px", lineHeight: 1 }}>Z</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.white, letterSpacing: "0.5px" }}>
                ZooTa
              </Typography>
            </Box>
          </Link>

          <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.path} style={{ textDecoration: "none", color: "rgba(255,255,255,0.8)", fontSize: "15px", fontWeight: 500 }}>
                {item.label}
              </Link>
            ))}
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

          <IconButton aria-label="abrir menu" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: COLORS.white }}>
            <FiMenu />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: { xs: "100%", sm: "300px" } },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

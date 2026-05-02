import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

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

export default function CTA() {
  return (
    <Box component="section" sx={{ backgroundColor: COLORS.dark, py: { xs: 12, md: 16 }, textAlign: "center", position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: `radial-gradient(circle, rgba(197, 155, 118, 0.1) 0%, transparent 60%)`, zIndex: 0 }} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography component="h2" variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: COLORS.white, mb: 3, fontSize: { xs: "2.2rem", md: "3.5rem" } }}>
          Pronto para modernizar sua gestão veterinária?
        </Typography>
        <Typography component="p" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.6, mb: 6, maxWidth: "600px", mx: "auto" }}>
          Junte-se a centenas de médicos veterinários e gestores de haras que já transformaram a maneira como controlam a saúde dos seus animais.
        </Typography>
        <Link href="/app/authentication/create" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.accent,
              color: COLORS.white,
              borderRadius: "30px",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 10px 20px rgba(197, 155, 118, 0.3)",
              "&:hover": { backgroundColor: COLORS.accentHover, boxShadow: "0 15px 25px rgba(197, 155, 118, 0.4)" },
            }}
          >
            Criar Conta Gratuita (14 dias)
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

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

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: COLORS.dark,
        pt: { xs: 20, md: 24 },
        pb: { xs: 12, md: 20 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: "-20%", right: "-10%", width: "60%", height: "140%", background: `radial-gradient(ellipse at center, rgba(197, 155, 118, 0.15) 0%, transparent 70%)`, zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 8 }}>
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: COLORS.white,
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3.8rem" },
                lineHeight: 1.1,
                mb: 3,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Sistema Veterinário para Grandes Animais.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.6,
                mb: 5,
                maxWidth: "540px",
                mx: { xs: "auto", md: 0 },
              }}
            >
              A melhor gestão para clínicas veterinárias rurais, haras e fazendas. Centralize prontuários, vacinas, faturamentos e agendamentos de equinos e bovinos de forma profissional.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
              <Link href="/app/authentication/create" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  endIcon={<FiArrowRight />}
                  sx={{
                    backgroundColor: COLORS.accent,
                    color: COLORS.white,
                    borderRadius: "30px",
                    px: 4,
                    py: 1.8,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 10px 20px rgba(197, 155, 118, 0.3)",
                    "&:hover": { backgroundColor: COLORS.accentHover, boxShadow: "0 15px 25px rgba(197, 155, 118, 0.4)" },
                  }}
                >
                  Comece seu teste grátis
                </Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box sx={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=800&q=80"
                alt="Cavalo de raça sendo examinado por um veterinário"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "24px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                  display: "block",
                }}
              />
              <Box
                sx={{ position: "absolute", bottom: -30, left: -30, backgroundColor: COLORS.white, p: 3, borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.15)", display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}
              >
                <Box sx={{ width: 48, height: 48, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent }}>
                  <FiCheckCircle size={24} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: COLORS.textMain, lineHeight: 1.2 }}>Exame Concluído</Typography>
                  <Typography sx={{ fontSize: "13px", color: COLORS.textLight }}>Pé de Pano - Atualizado agora</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

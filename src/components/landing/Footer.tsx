import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const COLORS = {
  dark: "#1E1A18",
  light: "#FAF8F5",
  white: "#FFFFFF",
  accent: "#C59B76",
  accentHover: "#B08560",
  textMain: "#332E2C",
  textLight: "#8A817C",
  border: "#E6DFD9"
};

export default function Footer() {
  return (
    <Box component="footer" id="contato" sx={{ backgroundColor: "#151211", pt: 10, pb: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr 1.5fr" }, gap: 8, mb: 8 }}>
          
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box sx={{ width: 28, height: 28, backgroundColor: COLORS.accent, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ color: COLORS.white, fontWeight: "bold", fontSize: "16px", lineHeight: 1 }}>Z</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.white, letterSpacing: "0.5px" }}>
                ZooTa
              </Typography>
            </Box>
            <Typography component="p" sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.6, mb: 4, maxWidth: "300px" }}>
              O sistema de gestão definitivo para clínicas veterinárias rurais, haras e fazendas focadas em grandes animais.
            </Typography>
          </Box>

          <Box>
            <Typography component="h3" sx={{ color: COLORS.white, fontWeight: 600, mb: 3 }}>Plataforma</Typography>
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link href="/recursos" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Recursos do Sistema</Link>
              <Link href="/beneficios" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Benefícios</Link>
              <Link href="/contato" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Contato</Link>
              <Link href="/app/authentication/login" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Acesso ao Sistema</Link>
            </Box>
          </Box>

          <Box>
            <Typography component="h3" sx={{ color: COLORS.white, fontWeight: 600, mb: 3 }}>Empresa</Typography>
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Link href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Sobre nós</Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Blog Veterinário</Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Termos de Uso</Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.95rem" }}>Privacidade</Link>
            </Box>
          </Box>

          <Box>
            <Typography component="h3" sx={{ color: COLORS.white, fontWeight: 600, mb: 3 }}>Contato</Typography>
            <address style={{ fontStyle: "normal" }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "rgba(255,255,255,0.5)" }}>
                  <FiMail size={18} />
                  <Typography sx={{ fontSize: "0.95rem" }}>contato@zoota.com.br</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "rgba(255,255,255,0.5)" }}>
                  <FiPhone size={18} />
                  <Typography sx={{ fontSize: "0.95rem" }}>+55 (11) 99999-9999</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, color: "rgba(255,255,255,0.5)" }}>
                  <FiMapPin size={18} style={{ marginTop: "4px" }} />
                  <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.5 }}>Av. Paulista, 1000<br/>São Paulo, SP</Typography>
                </Box>
              </Box>
            </address>
          </Box>

        </Box>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", pt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} ZooTa. Todos os direitos reservados.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
            Feito com excelência para o médico veterinário rural.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
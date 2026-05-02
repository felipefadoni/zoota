import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import Head from "next/head";
import { FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";

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

export default function Contato() {
  return (
    <>
      <Head>
        <title>Fale com a ZooTa | Atendimento para Veterinários</title>
        <meta name="description" content="Entre em contato com a equipe ZooTa. Suporte, vendas e dúvidas sobre o melhor sistema de gestão para clínicas veterinárias rurais e grandes animais." />
        <meta name="keywords" content="contato ZooTa, suporte sistema veterinário, atendimento software clínica veterinária, falar com vendas ERP veterinário" />
        <meta property="og:title" content="Fale com a ZooTa | Atendimento para Veterinários" />
        <meta property="og:description" content="Entre em contato com a equipe ZooTa. Suporte, vendas e dúvidas sobre o melhor sistema de gestão veterinária." />
        <link rel="canonical" href="https://zoota.com.br/contato" />
      </Head>

      <Box sx={{ fontFamily: "'Inter', sans-serif", color: COLORS.textMain, overflowX: "hidden", backgroundColor: COLORS.light }}>
        <Header />

        <Box component="main">
          {/* Mini Hero */}
          <Box sx={{ backgroundColor: COLORS.dark, pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 14 }, textAlign: "center", position: "relative" }}>
            <Box sx={{ position: "absolute", top: "0%", left: "0%", width: "100%", height: "100%", background: `radial-gradient(circle at top, rgba(197, 155, 118, 0.1) 0%, transparent 60%)`, zIndex: 0 }} />
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
              <Typography component="h1" variant="h2" sx={{ color: COLORS.white, fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Fale Conosco
              </Typography>
              <Typography component="p" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "700px", mx: "auto" }}>
                Estamos prontos para ajudar sua clínica rural ou haras a alcançar a máxima eficiência. Mande uma mensagem ou ligue para nossa equipe.
              </Typography>
            </Container>
          </Box>

          {/* Seção de Contato */}
          <Box component="section" sx={{ py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 8 }}>
                {/* Informações de Contato */}
                <Box sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: COLORS.textMain, mb: 4 }}>
                    Como podemos te ajudar hoje?
                  </Typography>
                  <Typography sx={{ color: COLORS.textLight, mb: 6, fontSize: "1.1rem", lineHeight: 1.6 }}>
                    Seja para tirar dúvidas sobre planos, solicitar um treinamento ou dar um feedback sobre o sistema, nossos consultores estão à disposição.
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                      <Box sx={{ width: 48, height: 48, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent }}>
                        <FiMessageCircle size={24} />
                      </Box>
                      <Box>
                        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
                          WhatsApp (Vendas & Suporte)
                        </Typography>
                        <Typography sx={{ color: COLORS.textLight }}>+55 (11) 99999-9999</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                      <Box sx={{ width: 48, height: 48, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent }}>
                        <FiMail size={24} />
                      </Box>
                      <Box>
                        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
                          E-mail
                        </Typography>
                        <Typography sx={{ color: COLORS.textLight }}>contato@zoota.com.br</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                      <Box sx={{ width: 48, height: 48, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent }}>
                        <FiMapPin size={24} />
                      </Box>
                      <Box>
                        <Typography component="h3" sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
                          Escritório
                        </Typography>
                        <Typography sx={{ color: COLORS.textLight }}>
                          Av. Paulista, 1000 - Bela Vista
                          <br />
                          São Paulo, SP - CEP 01310-100
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Formulário */}
                <Box sx={{ flex: 1 }}>
                  <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "24px", border: `1px solid ${COLORS.border}`, p: { xs: 2, md: 4 } }}>
                    <CardContent>
                      <Typography component="h3" variant="h5" sx={{ fontWeight: 700, mb: 4, color: COLORS.textMain }}>
                        Envie uma mensagem
                      </Typography>
                      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <TextField fullWidth label="Seu Nome Completo" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                        <TextField fullWidth label="E-mail Profissional" type="email" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                        <TextField fullWidth label="WhatsApp / Telefone" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                        <TextField fullWidth label="Como podemos ajudar?" multiline rows={4} variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }} />
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: COLORS.accent,
                            color: COLORS.white,
                            borderRadius: "12px",
                            py: 2,
                            fontSize: "1rem",
                            fontWeight: 600,
                            textTransform: "none",
                            mt: 2,
                            boxShadow: "0 10px 20px rgba(197, 155, 118, 0.2)",
                            "&:hover": { backgroundColor: COLORS.accentHover },
                          }}
                        >
                          Enviar Mensagem
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
}

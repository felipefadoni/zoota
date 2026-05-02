import { Box, Button, Container, Typography, Card, CardContent } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const COLORS = {
  dark: "#1E1A18",
  light: "#FAF8F5",
  white: "#FFFFFF",
  accent: "#C59B76",
  accentHover: "#B08560",
  textMain: "#332E2C",
  textLight: "#8A817C",
  border: "#E6DFD9",
  disabled: "#D0C9C4"
};

export default function Planos() {
  return (
    <>
      <Head>
        <title>Planos e Preços | ZooTa - Sistema Veterinário</title>
        <meta name="description" content="Conheça os planos do ZooTa para a gestão de clínicas veterinárias e haras. Opções Free, Básico e Full. Comece hoje mesmo a transformar seu atendimento." />
        <meta name="keywords" content="preço sistema veterinário, planos software clínica veterinária, software veterinário grátis, sistema para haras mensalidade" />
        <meta property="og:title" content="Planos e Preços | ZooTa - Sistema Veterinário" />
        <meta property="og:description" content="Conheça os planos do ZooTa para a gestão de clínicas veterinárias e haras. Opções Free, Básico e Full." />
        <link rel="canonical" href="https://zoota.com.br/planos" />
      </Head>

      <Box sx={{ fontFamily: "'Inter', sans-serif", color: COLORS.textMain, overflowX: "hidden", backgroundColor: COLORS.light }}>
        <Header />
        
        <Box component="main">
          {/* Mini Hero */}
          <Box sx={{ backgroundColor: COLORS.dark, pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 14 }, textAlign: "center", position: "relative" }}>
             <Box sx={{ position: "absolute", top: "0%", left: "0%", width: "100%", height: "100%", background: `radial-gradient(circle at top, rgba(197, 155, 118, 0.1) 0%, transparent 60%)`, zIndex: 0 }} />
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
              <Typography component="h1" variant="h2" sx={{ color: COLORS.white, fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Planos simples e transparentes
              </Typography>
              <Typography component="p" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "700px", mx: "auto" }}>
                Escolha o plano ideal para o tamanho do seu negócio. Sem taxas escondidas, cancele quando quiser.
              </Typography>
            </Container>
          </Box>

          {/* Pricing Grid */}
          <Box component="section" sx={{ py: { xs: 10, md: 16 }, px: { xs: 2, md: 0 } }}>
            <Container maxWidth="lg">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 4, alignItems: "center" }}>
                
                {/* PLANO FREE */}
                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "24px", border: `1px solid ${COLORS.border}`, height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ p: { xs: 4, md: 5 }, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography component="h2" variant="h5" sx={{ fontWeight: 700, color: COLORS.textMain, mb: 1 }}>Free (30 Dias)</Typography>
                      <Typography sx={{ color: COLORS.textLight, fontSize: "0.95rem" }}>Para testar a plataforma na prática</Typography>
                    </Box>
                    <Box sx={{ mb: 4 }}>
                      <Typography component="span" variant="h3" sx={{ fontWeight: 700, color: COLORS.textMain }}>R$ 0</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, mb: 4 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.textMain }}>1 Cliente</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.textMain }}>2 Animais</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, opacity: 0.5 }}>
                        <FiXCircle color={COLORS.disabled} size={20} />
                        <Typography sx={{ color: COLORS.textLight, textDecoration: "line-through" }}>Não envia link de cobrança</Typography>
                      </Box>
                    </Box>
                    <Link href="/app/authentication/create" style={{ textDecoration: "none" }}>
                      <Button fullWidth variant="outlined" sx={{ color: COLORS.accent, borderColor: COLORS.accent, borderRadius: "12px", py: 1.5, fontWeight: 600, textTransform: "none", "&:hover": { backgroundColor: "rgba(197, 155, 118, 0.1)", borderColor: COLORS.accentHover } }}>
                        Começar Grátis
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* PLANO BÁSICO */}
                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "24px", border: `1px solid ${COLORS.border}`, height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ p: { xs: 4, md: 5 }, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography component="h2" variant="h5" sx={{ fontWeight: 700, color: COLORS.textMain, mb: 1 }}>Básico</Typography>
                      <Typography sx={{ color: COLORS.textLight, fontSize: "0.95rem" }}>Ideal para profissionais autônomos</Typography>
                    </Box>
                    <Box sx={{ mb: 4, display: "flex", alignItems: "flex-end", gap: 1 }}>
                      <Typography component="span" variant="h3" sx={{ fontWeight: 700, color: COLORS.textMain }}>R$ 79,90</Typography>
                      <Typography component="span" sx={{ color: COLORS.textLight, mb: 1 }}>/mês</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, mb: 4 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.textMain }}>10 Clientes</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.textMain }}>20 Animais</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box sx={{ mt: 0.5 }}><FiCheckCircle color={COLORS.accent} size={20} /></Box>
                        <Typography sx={{ color: COLORS.textMain, lineHeight: 1.4 }}>Envia cobrança pelo WhatsApp e E-mail</Typography>
                      </Box>
                    </Box>
                    <Link href="/app/authentication/create" style={{ textDecoration: "none" }}>
                      <Button fullWidth variant="outlined" sx={{ color: COLORS.accent, borderColor: COLORS.accent, borderRadius: "12px", py: 1.5, fontWeight: 600, textTransform: "none", "&:hover": { backgroundColor: "rgba(197, 155, 118, 0.1)", borderColor: COLORS.accentHover } }}>
                        Assinar Básico
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* PLANO FULL (Destaque) */}
                <Card elevation={24} sx={{ backgroundColor: COLORS.dark, borderRadius: "24px", height: "105%", display: "flex", flexDirection: "column", position: "relative", transform: { md: "scale(1.05)" }, zIndex: 2 }}>
                  {/* Badge "Mais Escolhido" */}
                  <Box sx={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", backgroundColor: COLORS.accent, color: COLORS.white, px: 3, py: 0.5, borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
                    Mais Escolhido
                  </Box>
                  
                  <CardContent sx={{ p: { xs: 4, md: 5 }, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography component="h2" variant="h5" sx={{ fontWeight: 700, color: COLORS.white, mb: 1 }}>Full</Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>A gestão completa para clínicas e haras</Typography>
                    </Box>
                    <Box sx={{ mb: 4, display: "flex", alignItems: "flex-end", gap: 1 }}>
                      <Typography component="span" variant="h3" sx={{ fontWeight: 700, color: COLORS.white }}>R$ 149,90</Typography>
                      <Typography component="span" sx={{ color: "rgba(255,255,255,0.5)", mb: 1 }}>/mês</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, mb: 4 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.white, fontWeight: 500 }}>Clientes Ilimitados</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.white, fontWeight: 500 }}>Animais Ilimitados</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.white }}>Agenda Integrada</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FiCheckCircle color={COLORS.accent} size={20} />
                        <Typography sx={{ color: COLORS.white }}>Estoque de Remédios</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Box sx={{ mt: 0.5 }}><FiCheckCircle color={COLORS.accent} size={20} /></Box>
                        <Typography sx={{ color: COLORS.white, lineHeight: 1.4 }}>Envia cobrança pelo WhatsApp e E-mail</Typography>
                      </Box>
                    </Box>
                    <Link href="/app/authentication/create" style={{ textDecoration: "none" }}>
                      <Button fullWidth variant="contained" sx={{ backgroundColor: COLORS.accent, color: COLORS.white, borderRadius: "12px", py: 1.5, fontWeight: 600, textTransform: "none", "&:hover": { backgroundColor: COLORS.accentHover } }}>
                        Assinar Full
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

              </Box>
            </Container>
          </Box>

        </Box>

        <Footer />
      </Box>
    </>
  );
}
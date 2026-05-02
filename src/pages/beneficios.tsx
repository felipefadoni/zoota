import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import Header from "../components/landing/Header";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import { FiCheckCircle } from "react-icons/fi";

const COLORS = {
  dark: "#1E1A18",
  light: "#FAF8F5",
  white: "#FFFFFF",
  accent: "#C59B76",
  textMain: "#332E2C",
  textLight: "#8A817C",
  border: "#E6DFD9"
};

export default function Beneficios() {
  return (
    <>
      <Head>
        <title>Benefícios do ERP Veterinário para Grandes Animais | ZooTa</title>
        <meta name="description" content="Descubra as vantagens do ZooTa para sua clínica veterinária rural. Ganhe tempo, reduza erros no manejo e aumente o faturamento com nosso ERP veterinário." />
        <meta name="keywords" content="benefícios sistema veterinário, vantagens software clínica veterinária, ERP veterinário grandes animais, melhorar gestão de haras, eficiência veterinária rural" />
        <meta property="og:title" content="Benefícios do ERP Veterinário para Grandes Animais | ZooTa" />
        <meta property="og:description" content="Descubra as vantagens do ZooTa para sua clínica veterinária rural. Ganhe tempo, reduza erros no manejo e aumente o faturamento." />
        <link rel="canonical" href="https://zoota.com.br/beneficios" />
      </Head>

      <Box sx={{ fontFamily: "'Inter', sans-serif", color: COLORS.textMain, overflowX: "hidden", backgroundColor: COLORS.light }}>
        <Header />
        
        <Box component="main">
          {/* Mini Hero */}
          <Box sx={{ backgroundColor: COLORS.dark, pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 14 }, textAlign: "center", position: "relative" }}>
             <Box sx={{ position: "absolute", top: "0%", left: "0%", width: "100%", height: "100%", background: `radial-gradient(circle at top, rgba(197, 155, 118, 0.1) 0%, transparent 60%)`, zIndex: 0 }} />
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
              <Typography component="h1" variant="h2" sx={{ color: COLORS.white, fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Por que escolher o ZooTa?
              </Typography>
              <Typography component="p" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "700px", mx: "auto" }}>
                Nós entendemos as dificuldades do campo. Veja como nosso sistema transforma o seu dia a dia profissional e melhora o atendimento aos animais.
              </Typography>
            </Container>
          </Box>

          {/* Benefícios Detalhados */}
          <Box component="section" sx={{ backgroundColor: COLORS.white, py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
              
              {/* Benefício 1 */}
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 6, md: 12 }, mb: { xs: 10, md: 16 } }}>
                <Box sx={{ flex: 1, width: "100%" }}>
                  <Box 
                    component="img" 
                    src="https://images.unsplash.com/photo-1596733430284-f74370601560?auto=format&fit=crop&w=800&q=80" 
                    alt="Bezerro no pasto representando a saúde animal"
                    sx={{ width: "100%", height: "auto", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} 
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: COLORS.textMain, mb: 3 }}>
                    Ganhe tempo e foque no que importa: a saúde animal.
                  </Typography>
                  <Typography component="p" sx={{ color: COLORS.textLight, fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                    O trabalho do veterinário de grandes animais exige deslocamento constante e atenção redobrada. Com o ZooTa, você gasta menos tempo preenchendo papéis e buscando históricos antigos.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}><FiCheckCircle color={COLORS.accent} size={20} /><Typography>Busca instantânea de prontuários</Typography></Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}><FiCheckCircle color={COLORS.accent} size={20} /><Typography>Acesso pelo celular no meio do pasto</Typography></Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}><FiCheckCircle color={COLORS.accent} size={20} /><Typography>Fim da papelada e perda de dados</Typography></Box>
                  </Box>
                </Box>
              </Box>

              {/* Benefício 2 */}
              <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, alignItems: "center", gap: { xs: 6, md: 12 } }}>
                <Box sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: COLORS.textMain, mb: 3 }}>
                    Profissionalize suas cobranças e evite inadimplência.
                  </Typography>
                  <Typography component="p" sx={{ color: COLORS.textLight, fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                    Muitos veterinários perdem dinheiro por não cobrarem todos os procedimentos realizados. O ZooTa funciona como um PDV rápido que soma seus serviços e gera cobranças claras para os fazendeiros.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}><FiCheckCircle color={COLORS.accent} size={20} /><Typography>Cobranças diretas via WhatsApp</Typography></Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}><FiCheckCircle color={COLORS.accent} size={20} /><Typography>Transparência com os proprietários</Typography></Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}><FiCheckCircle color={COLORS.accent} size={20} /><Typography>Controle exato do que foi pago e o que está pendente</Typography></Box>
                  </Box>
                </Box>
                <Box sx={{ flex: 1, width: "100%" }}>
                  <Box 
                    component="img" 
                    src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80" 
                    alt="Cavalo acompanhado por veterinário demonstrando confiança"
                    sx={{ width: "100%", height: "auto", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} 
                  />
                </Box>
              </Box>

            </Container>
          </Box>

          <CTA />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
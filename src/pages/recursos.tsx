import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Head from "next/head";
import { FiActivity, FiCalendar, FiDollarSign, FiFileText, FiShield, FiUsers } from "react-icons/fi";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";

const COLORS = {
  dark: "#1E1A18",
  light: "#FAF8F5",
  white: "#FFFFFF",
  accent: "#C59B76",
  textMain: "#332E2C",
  textLight: "#8A817C",
  border: "#E6DFD9",
};

export default function Recursos() {
  return (
    <>
      <Head>
        <title>Recursos do Sistema Veterinário para Grandes Animais | ZooTa</title>
        <meta name="description" content="Conheça todos os recursos do ZooTa: prontuário eletrônico para equinos e bovinos, gestão financeira, controle de vacinas e agendamentos para veterinários." />
        <meta name="keywords" content="recursos sistema veterinário, funcionalidades software veterinário, prontuário eletrônico grandes animais, controle financeiro clínica rural, gestão de haras" />
        <meta property="og:title" content="Recursos do Sistema Veterinário para Grandes Animais | ZooTa" />
        <meta property="og:description" content="Conheça todos os recursos do ZooTa: prontuário eletrônico para equinos e bovinos, gestão financeira e controle de vacinas." />
        <link rel="canonical" href="https://zoota.com.br/recursos" />
      </Head>

      <Box sx={{ fontFamily: "'Inter', sans-serif", color: COLORS.textMain, overflowX: "hidden", backgroundColor: COLORS.light }}>
        <Header />

        <Box component="main">
          {/* Mini Hero para a página */}
          <Box sx={{ backgroundColor: COLORS.dark, pt: { xs: 20, md: 24 }, pb: { xs: 10, md: 14 }, textAlign: "center", position: "relative" }}>
            <Box sx={{ position: "absolute", top: "0%", left: "0%", width: "100%", height: "100%", background: `radial-gradient(circle at top, rgba(197, 155, 118, 0.1) 0%, transparent 60%)`, zIndex: 0 }} />
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
              <Typography component="h1" variant="h2" sx={{ color: COLORS.white, fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Recursos do Sistema
              </Typography>
              <Typography component="p" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "700px", mx: "auto" }}>
                Ferramentas completas desenvolvidas especificamente para o médico veterinário de grandes animais. Abandone as planilhas e ganhe eficiência no campo.
              </Typography>
            </Container>
          </Box>

          {/* Grid de Recursos Expandido */}
          <Box component="section" sx={{ py: { xs: 10, md: 16 } }}>
            <Container maxWidth="lg">
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "20px", border: `1px solid ${COLORS.border}` }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                      <FiActivity size={28} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                      Prontuário Clínico
                    </Typography>
                    <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Registre anamneses, diagnósticos, tratamentos e exames de cada animal (equinos, bovinos) de forma segura e acessível de qualquer lugar.</Typography>
                  </CardContent>
                </Card>

                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "20px", border: `1px solid ${COLORS.border}` }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                      <FiDollarSign size={28} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                      Faturamento e PDV
                    </Typography>
                    <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Controle serviços prestados, some valores automaticamente, emita recibos e envie links de cobrança diretamente pelo WhatsApp.</Typography>
                  </CardContent>
                </Card>

                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "20px", border: `1px solid ${COLORS.border}` }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                      <FiUsers size={28} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                      Gestão de Clientes
                    </Typography>
                    <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Mantenha o cadastro atualizado de proprietários, fazendas e haras, com histórico completo de atendimentos e pagamentos vinculados.</Typography>
                  </CardContent>
                </Card>

                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "20px", border: `1px solid ${COLORS.border}` }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                      <FiCalendar size={28} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                      Agenda Veterinária
                    </Typography>
                    <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Organize suas visitas às propriedades rurais, retornos agendados e alertas de vacinação para não perder nenhum prazo.</Typography>
                  </CardContent>
                </Card>

                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "20px", border: `1px solid ${COLORS.border}` }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                      <FiFileText size={28} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                      Relatórios e Receitas
                    </Typography>
                    <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Gere relatórios de desempenho da clínica e emita receitas digitais padronizadas com apenas alguns cliques.</Typography>
                  </CardContent>
                </Card>

                <Card elevation={0} sx={{ backgroundColor: COLORS.white, borderRadius: "20px", border: `1px solid ${COLORS.border}` }}>
                  <CardContent sx={{ p: 5 }}>
                    <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                      <FiShield size={28} />
                    </Box>
                    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                      Segurança em Nuvem
                    </Typography>
                    <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Seus dados estão protegidos com backups automáticos. Nunca mais perca o histórico de um paciente importante.</Typography>
                  </CardContent>
                </Card>
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

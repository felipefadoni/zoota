import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { FiActivity, FiCheckCircle, FiDollarSign, FiUsers } from "react-icons/fi";

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

export default function Features() {
  return (
    <>
      {/* Logos */}
      <Box component="section" sx={{ backgroundColor: COLORS.white, py: 6, borderBottom: `1px solid ${COLORS.border}` }}>
        <Container maxWidth="lg">
          <Typography component="h2" sx={{ textAlign: "center", color: COLORS.textLight, fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", mb: 4 }}>
            Software veterinário confiado por haras e fazendas
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: 4, md: 8 }, opacity: 0.5, filter: "grayscale(100%)" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "'Playfair Display', serif" }}>
              Haras Vitória
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "'Playfair Display', serif" }}>
              Estância Luz
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "'Playfair Display', serif" }}>
              VetRural
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "'Playfair Display', serif" }}>
              AgroPlus
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Grid de Recursos */}
      <Box component="section" id="recursos" sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10, maxWidth: "700px", mx: "auto" }}>
            <Typography sx={{ color: COLORS.accent, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", mb: 2, fontSize: "13px" }}>Recursos do Sistema</Typography>
            <Typography component="h2" variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: COLORS.textMain, mb: 3, fontSize: { xs: "2rem", md: "2.8rem" } }}>
              Gestão veterinária completa em um só lugar.
            </Typography>
            <Typography component="p" sx={{ color: COLORS.textLight, fontSize: "1.1rem", lineHeight: 1.6 }}>
              Substitua planilhas e papéis pelo melhor programa para veterinários de grandes animais. Um sistema em nuvem, rápido e acessível no campo.
            </Typography>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 4 }}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: COLORS.white,
                borderRadius: "20px",
                border: `1px solid ${COLORS.border}`,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" },
              }}
            >
              <CardContent sx={{ p: 5 }}>
                <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                  <FiActivity size={28} />
                </Box>
                <Typography component="h3" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                  Prontuário Eletrônico
                </Typography>
                <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Acompanhe o histórico clínico, exames, vacinas e pesagem de equinos e bovinos de forma individual e detalhada.</Typography>
              </CardContent>
            </Card>

            <Card
              elevation={0}
              sx={{
                backgroundColor: COLORS.white,
                borderRadius: "20px",
                border: `1px solid ${COLORS.border}`,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" },
              }}
            >
              <CardContent sx={{ p: 5 }}>
                <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                  <FiDollarSign size={28} />
                </Box>
                <Typography component="h3" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                  Controle Financeiro
                </Typography>
                <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Gere faturas veterinárias, compartilhe cobranças via WhatsApp e gerencie pagamentos da sua clínica rural.</Typography>
              </CardContent>
            </Card>

            <Card
              elevation={0}
              sx={{
                backgroundColor: COLORS.white,
                borderRadius: "20px",
                border: `1px solid ${COLORS.border}`,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" },
              }}
            >
              <CardContent sx={{ p: 5 }}>
                <Box sx={{ width: 56, height: 56, backgroundColor: "rgba(197, 155, 118, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, mb: 4 }}>
                  <FiUsers size={28} />
                </Box>
                <Typography component="h3" variant="h5" sx={{ fontWeight: 700, mb: 2, color: COLORS.textMain }}>
                  Gestão de Fazendas
                </Typography>
                <Typography sx={{ color: COLORS.textLight, lineHeight: 1.6 }}>Organize clientes, proprietários de haras e fazendas em uma base de dados inteligente.</Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Split Showcase */}
      <Box component="section" id="beneficios" sx={{ backgroundColor: COLORS.white, py: { xs: 10, md: 16 }, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 8, md: 12 } }}>
            <Box sx={{ flex: 1, width: "100%" }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80"
                alt="Gestão de bovinos e touros na fazenda"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: COLORS.accent, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", mb: 2, fontSize: "13px" }}>Aplicativo para o campo</Typography>
              <Typography component="h2" variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: COLORS.textMain, mb: 4, fontSize: { xs: "2rem", md: "2.5rem" }, lineHeight: 1.2 }}>
                O ERP veterinário desenhado para a sua rotina.
              </Typography>
              <Typography component="p" sx={{ color: COLORS.textLight, fontSize: "1.1rem", lineHeight: 1.6, mb: 5 }}>
                O manejo de grandes animais exige controle rigoroso e um software para clínica veterinária rural não pode falhar. Com o ZooTa, você minimiza erros e ganha agilidade no diagnóstico e tratamento.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["Histórico reprodutivo e exames laboratoriais na palma da mão.", "Notificações automáticas para reforço de vacinas.", "Emissão e envio de relatórios e receitas pelo WhatsApp."].map((item) => (
                  <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    <Box sx={{ mt: 0.5, color: COLORS.accent }}>
                      <FiCheckCircle size={20} />
                    </Box>
                    <Typography sx={{ color: COLORS.textMain, fontWeight: 500, fontSize: "1.05rem" }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

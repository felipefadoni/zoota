import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";

// Mock Data
const kpiData = [
  { title: "Faturamento Total", value: "R$ 45.200,00", color: "primary.main" },
  { title: "Total Recebido", value: "R$ 38.500,00", color: "#28a745" },
  { title: "A Receber (Aberto)", value: "R$ 6.700,00", color: "#dc3545" },
  { title: "Atendimentos Realizados", value: "142", color: "#17a2b8" },
  { title: "Total de Clientes", value: "850", color: "#6f42c1" },
  { title: "Total de Animais", value: "1.240", color: "#fd7e14" },
];

const revenueData = [
  { name: "Nov", value: 35000 },
  { name: "Dez", value: 42000 },
  { name: "Jan", value: 38000 },
  { name: "Fev", value: 45000 },
  { name: "Mar", value: 41000 },
  { name: "Abr", value: 48000 },
];

const servicesData = [
  { name: "Consulta de Rotina", value: 400 },
  { name: "Vacinação", value: 300 },
  { name: "Exames de Sangue", value: 300 },
  { name: "Cirurgias", value: 200 },
  { name: "Castração", value: 150 },
];
const COLORS = ["#d86825", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function Dashboard() {
  return (
    <AppLayout title="Dashboard">
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <PageHeader title="Dashboard" description="Visão geral da sua clínica veterinária." />
      </Box>

      {/* KPIs */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {kpiData.map((kpi) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={kpi.title}>
            <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography sx={{ fontSize: 14, color: "#777", fontWeight: 500, mb: 1 }}>{kpi.title}</Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: kpi.color }}>
                  {kpi.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0", height: "100%" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 3 }}>
                Faturamento dos Últimos 6 Meses
              </Typography>
              <Box sx={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#777" }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "#777" }} tickFormatter={(value: number) => `R$${value / 1000}k`} />
                    <Tooltip
                      cursor={{ fill: "rgba(216, 104, 37, 0.05)" }}
                      contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                      formatter={(value: any) => [`R$ ${Number(value).toLocaleString("pt-BR")}`, "Faturamento"]}
                    />
                    <Bar dataKey="value" fill="#d86825" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Services Pie Chart */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0", height: "100%" }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 3 }}>
                Serviços Mais Prestados
              </Typography>
              <Box sx={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={servicesData} cx="50%" cy="45%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                      {servicesData.map((entry) => (
                        <Cell key={entry.name} fill={COLORS[servicesData.indexOf(entry) % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} formatter={(value) => [`${value} Atendimentos`, "Quantidade"]} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

import { Box, Button, Card, CardContent, Divider, Grid, IconButton, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import type React from "react";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";

const ufs = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

export default function NovoCliente() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fazenda: "",
    proprietario: "",
    cidade: "",
    estado: "",
    distancia: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Simulação de salvamento
    console.log("Dados do Cliente:", formData);
    router.push("/app/clientes");
  };

  return (
    <AppLayout title="Novo Cliente">
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 4 }}>
        <IconButton
          onClick={() => router.back()}
          sx={{
            mt: 0.5,
            color: "#555",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
          }}
          aria-label="Voltar"
        >
          <FiArrowLeft />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <PageHeader title="Novo Cliente" description="Preencha os dados abaixo para cadastrar um novo cliente ou fazenda." showButton={false} />
        </Box>
      </Box>

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Nome da Fazenda / Propriedade" name="fazenda" value={formData.fazenda} onChange={handleChange} variant="outlined" placeholder="Ex: Fazenda Boa Esperança" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Nome do Proprietário" name="proprietario" value={formData.proprietario} onChange={handleChange} variant="outlined" placeholder="Ex: João da Silva" />
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <TextField fullWidth label="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} variant="outlined" placeholder="Ex: Ribeirão Preto" />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField select fullWidth label="Estado" name="estado" value={formData.estado} onChange={handleChange} variant="outlined">
                {ufs.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value} - {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Distância aproximada (KM)"
                name="distancia"
                type="number"
                value={formData.distancia}
                onChange={handleChange}
                variant="outlined"
                placeholder="Ex: 45"
                slotProps={{
                  htmlInput: { min: 0 },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <Box sx={{ p: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => router.back()}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              color: "#555",
              borderColor: "#ccc",
              "&:hover": { borderColor: "#999", backgroundColor: "rgba(0,0,0,0.02)" },
            }}
          >
            Cancelar
          </Button>
          <Button
              variant="contained"
              onClick={handleSave}
              disableElevation
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
            Salvar Cliente
          </Button>
        </Box>
      </Card>
    </AppLayout>
  );
}

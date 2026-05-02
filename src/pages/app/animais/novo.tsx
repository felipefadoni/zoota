import { Box, Button, Card, CardContent, Divider, Grid, IconButton, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import type React from "react";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";

const categorias = ["Cachorro", "Gato", "Cavalo", "Boi", "Vaca"];
const statusOptions = ["Ativo", "Inativo"];
const clientesMock = ["Fazenda Boa Vista", "João Silva", "Rancho Fundo", "Maria Fernandes"];

export default function NovoAnimal() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    rastreio: "",
    cliente: "",
    raca: "",
    categoria: "",
    status: "Ativo",
    descricao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Simulação de salvamento
    console.log("Dados do Animal:", formData);
    router.push("/app/animais");
  };

  return (
    <AppLayout title="Novo Animal">
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
          <PageHeader title="Novo Animal" description="Preencha os dados abaixo para cadastrar um novo animal no sistema." showButton={false} />
        </Box>
      </Box>

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Nome do Animal" name="nome" value={formData.nome} onChange={handleChange} variant="outlined" placeholder="Ex: Rex" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Rastreio (Opcional)" name="rastreio" value={formData.rastreio} onChange={handleChange} variant="outlined" placeholder="Ex: BR-123456789" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField select fullWidth label="Cliente / Proprietário" name="cliente" value={formData.cliente} onChange={handleChange} variant="outlined">
                {clientesMock.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Raça" name="raca" value={formData.raca} onChange={handleChange} variant="outlined" placeholder="Ex: Nelore" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField select fullWidth label="Categoria" name="categoria" value={formData.categoria} onChange={handleChange} variant="outlined">
                {categorias.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField select fullWidth label="Status" name="status" value={formData.status} onChange={handleChange} variant="outlined">
                {statusOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth multiline rows={4} label="Descrição do Animal" name="descricao" value={formData.descricao} onChange={handleChange} variant="outlined" placeholder="Informações adicionais sobre o animal..." />
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
              "&:hover": { backgroundColor: "primary.dark" }
            }}
          >
            Salvar Animal
          </Button>
        </Box>
      </Card>
    </AppLayout>
  );
}

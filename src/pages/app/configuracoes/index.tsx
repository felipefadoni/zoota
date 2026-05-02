import { Box, Button, Card, Divider, Grid, MenuItem, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FiSave } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Configuracoes() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <AppLayout title="Configurações">
      <PageHeader title="Configurações" description="Gerencie seus dados pessoais e informações da conta." />

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0", p: { xs: 2, md: 4 } }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="Abas de configuração">
            <Tab label="Dados de Cadastro" {...a11yProps(0)} sx={{ textTransform: "none", fontWeight: 600, fontSize: "15px" }} />
            <Tab label="Dados da Conta" {...a11yProps(1)} sx={{ textTransform: "none", fontWeight: 600, fontSize: "15px" }} />
          </Tabs>
        </Box>

        {/* Aba 1: Dados de Cadastro */}
        <CustomTabPanel value={tabValue} index={0}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Informações Pessoais
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Nome Completo" variant="outlined" defaultValue="Usuário Administrador" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="E-mail" type="email" variant="outlined" defaultValue="admin@zoota.com.br" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Telefone" variant="outlined" defaultValue="(11) 99999-9999" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="CPF / CNPJ" variant="outlined" defaultValue="000.000.000-00" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Nova Senha" type="password" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Repetir Nova Senha" type="password" variant="outlined" />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary" startIcon={<FiSave />} sx={{ borderRadius: "8px", textTransform: "none", px: 4, boxShadow: "none" }}>
              Salvar Alterações
            </Button>
          </Box>
        </CustomTabPanel>

        {/* Aba 2: Dados da Conta */}
        <CustomTabPanel value={tabValue} index={1}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Dados Bancários para Recebimento
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Banco" variant="outlined" placeholder="Ex: Nubank, Itaú, etc" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField select fullWidth label="Tipo de Conta" variant="outlined" defaultValue="corrente">
                <MenuItem value="corrente">Conta Corrente</MenuItem>
                <MenuItem value="poupanca">Conta Poupança</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Agência" variant="outlined" placeholder="0000" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Conta com Dígito" variant="outlined" placeholder="00000-0" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Chave PIX" variant="outlined" placeholder="E-mail, CPF/CNPJ, Celular ou Aleatória" />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary" startIcon={<FiSave />} sx={{ borderRadius: "8px", textTransform: "none", px: 4, boxShadow: "none" }}>
              Salvar Dados Bancários
            </Button>
          </Box>
        </CustomTabPanel>
      </Card>
    </AppLayout>
  );
}

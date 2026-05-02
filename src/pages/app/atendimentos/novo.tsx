import { Box, Button, Card, Divider, Grid, IconButton, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiPlusCircle, FiSave, FiTrash2 } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";

interface ServicoSelecionado {
  id: string;
  nome: string;
  valor: number;
}

export default function NovoAtendimento() {
  const router = useRouter();

  const [servicoAtual, setServicoAtual] = useState("");
  const [servicosList, setServicosList] = useState<ServicoSelecionado[]>([]);

  // Mock de serviços disponíveis
  const servicosDisponiveis = [
    { id: "1", nome: "Consulta Geral", valor: 150 },
    { id: "2", nome: "Vacinação", valor: 80 },
    { id: "3", nome: "Exame de Sangue", valor: 120 },
    { id: "4", nome: "Cirurgia Básica", valor: 800 },
  ];

  const handleAddServico = () => {
    if (!servicoAtual) return;

    const servico = servicosDisponiveis.find((s) => s.id === servicoAtual);
    if (servico) {
      setServicosList([...servicosList, { ...servico, id: Date.now().toString() }]);
      setServicoAtual("");
    }
  };

  const handleRemoveServico = (idToRemove: string) => {
    setServicosList(servicosList.filter((s) => s.id !== idToRemove));
  };

  const valorTotal = servicosList.reduce((acc, curr) => acc + curr.valor, 0);

  return (
    <AppLayout title="Novo Atendimento">
      <Box sx={{ mb: 3 }}>
        <Button startIcon={<FiArrowLeft />} onClick={() => router.back()} sx={{ color: "text.secondary", textTransform: "none", mb: 2 }}>
          Voltar para atendimentos
        </Button>
        <PageHeader title="Novo Atendimento" description="Cadastre um novo atendimento no sistema." />
      </Box>

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0", p: { xs: 2, md: 4 } }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Dados do Atendimento
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField select fullWidth label="Cliente" variant="outlined" defaultValue="">
              <MenuItem value="1">Fazenda Boa Vista</MenuItem>
              <MenuItem value="2">Rancho Fundo</MenuItem>
              <MenuItem value="3">Estância Santa Luzia</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField type="date" fullWidth label="Data" variant="outlined" slotProps={{ inputLabel: { shrink: true } }} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField select fullWidth label="Status" variant="outlined" defaultValue="pendente">
              <MenuItem value="pendente">Pendente</MenuItem>
              <MenuItem value="pago">Pago</MenuItem>
              <MenuItem value="atrasado">Atrasado</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField fullWidth label="Valor Total" variant="outlined" value={`R$ ${valorTotal.toFixed(2).replace(".", ",")}`} disabled />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField fullWidth multiline rows={2} label="Observações" variant="outlined" />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Serviços do Atendimento
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 3, alignItems: "flex-start" }}>
          <TextField select fullWidth label="Selecione um Serviço" variant="outlined" value={servicoAtual} onChange={(e) => setServicoAtual(e.target.value)}>
            {servicosDisponiveis.map((servico) => (
              <MenuItem key={servico.id} value={servico.id}>
                {servico.nome} - R$ {servico.valor.toFixed(2).replace(".", ",")}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleAddServico} disabled={!servicoAtual} sx={{ height: 56, px: 4, borderRadius: "8px" }} startIcon={<FiPlusCircle />}>
            Adicionar
          </Button>
        </Box>

        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
              <TableRow>
                <TableCell>Serviço</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="center" width={100}>
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {servicosList.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center" sx={{ py: 4, color: "text.secondary" }}>
                    Nenhum serviço adicionado ainda.
                  </TableCell>
                </TableRow>
              ) : (
                servicosList.map((servico) => (
                  <TableRow key={servico.id}>
                    <TableCell>{servico.nome}</TableCell>
                    <TableCell align="right">R$ {servico.valor.toFixed(2).replace(".", ",")}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="error" onClick={() => handleRemoveServico(servico.id)}>
                        <FiTrash2 />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Total: R$ {valorTotal.toFixed(2).replace(".", ",")}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" color="inherit" onClick={() => router.back()} sx={{ borderRadius: "8px", textTransform: "none", px: 3 }}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" startIcon={<FiSave />} sx={{ borderRadius: "8px", textTransform: "none", px: 3, boxShadow: "none" }}>
            Salvar Atendimento
          </Button>
        </Box>
      </Card>
    </AppLayout>
  );
}

import { Box, Button, Card, CardContent, Divider, Grid, IconButton, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NumericFormat, type NumericFormatProps } from "react-number-format";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(function NumericFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      valueIsNumericString
      prefix="R$ "
    />
  );
});

export default function NovoServico() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: "",
    valor: "",
    descricao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Dados do Serviço:", formData);
    router.push("/app/servicos");
  };

  return (
    <AppLayout title="Novo Serviço">
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
          <PageHeader title="Novo Serviço" description="Preencha os detalhes para cadastrar um novo serviço em seu catálogo." showButton={false} />
        </Box>
      </Box>

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField fullWidth label="Título do Serviço" name="titulo" value={formData.titulo} onChange={handleChange} variant="outlined" placeholder="Ex: Consulta de Rotina" />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Valor do Serviço"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                variant="outlined"
                placeholder="R$ 0,00"
                slotProps={{
                  input: {
                    inputComponent: NumericFormatCustom as any,
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Descrição do Serviço (Opcional)"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                variant="outlined"
                placeholder="Detalhes e informações adicionais sobre o serviço..."
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
            Salvar Serviço
          </Button>
        </Box>
      </Card>
    </AppLayout>
  );
}

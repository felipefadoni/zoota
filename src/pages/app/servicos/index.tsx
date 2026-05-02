import React, { useState } from "react";
import { Box, Card, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/router";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";
import StatusChip from "../../../components/ui/StatusChip";

// Mock Data for the Table
const rows = [
  { id: 1, titulo: "Consulta de Rotina", descricao: "Avaliação geral do estado de saúde do animal.", valor: 150.0, status: "Ativo" },
  { id: 2, titulo: "Vacinação", descricao: "Aplicação de vacinas anuais e reforços.", valor: 80.0, status: "Ativo" },
  { id: 3, titulo: "Exame de Sangue (Hemograma)", descricao: "Coleta e análise completa de sangue.", valor: 120.0, status: "Ativo" },
  { id: 4, titulo: "Cirurgia de Castração", descricao: "Procedimento cirúrgico para controle reprodutivo.", valor: 450.0, status: "Ativo" },
  { id: 5, titulo: "Limpeza de Tártaro", descricao: "Profilaxia dentária com ultrassom.", valor: 200.0, status: "Inativo" },
  { id: 6, titulo: "Ultrassonografia", descricao: "Exame de imagem abdominal ou gestacional.", valor: 250.0, status: "Ativo" },
  { id: 7, titulo: "Banho e Tosa", descricao: "Serviço de estética e higiene para cães e gatos.", valor: 90.0, status: "Inativo" },
];

export default function Servicos() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [_selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const columns: GridColDef[] = [
    {
      field: "servico",
      headerName: "Serviço / Descrição",
      flex: 2,
      minWidth: 300,
      renderCell: (params) => (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", py: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>
            {params.row.titulo}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "#777", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {params.row.descricao}
          </Typography>
        </Box>
      ),
    },
    {
      field: "valor",
      headerName: "Valor Unitário (R$)",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const valorFormatado = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(params.value as number);
        return (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>{valorFormatado}</Typography>
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <StatusChip status={params.value as string} />
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 100,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <IconButton
              size="small"
              onClick={(e) => handleMenuClick(e, params.row.id as number)}
              aria-label="ações"
            >
              <FiMoreVertical />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <AppLayout title="Serviços">
      <PageHeader
        title="Serviços"
        description="Gerencie os serviços oferecidos e seus respectivos valores."
        showButton={true}
        titleButton="Novo Serviço"
        onClickButton={() => router.push("/app/servicos/novo")}
      />

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowHeight={() => "auto"}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-columnHeader:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-row": {
                minHeight: "72px !important", // Ensures enough height for two lines
              },
            }}
          />
        </Box>
      </Card>

      {/* Menu de Ações */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
              mt: 1.5,
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              minWidth: "160px",
            },
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: "0.875rem", gap: 1.5 }}>
          <FiEdit2 size={16} /> Editar Serviço
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: "0.875rem", gap: 1.5, color: "#dc3545" }}>
          <FiTrash2 size={16} /> Excluir Serviço
        </MenuItem>
      </Menu>
    </AppLayout>
  );
}
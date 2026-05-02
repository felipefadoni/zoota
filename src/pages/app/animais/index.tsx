import React, { useState } from "react";
import { Box, Card, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FiMoreVertical, FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/router";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";
import StatusChip from "../../../components/ui/StatusChip";

// Mock Data for the Table
const rows = [
  { id: 1, identificacao: "Boi Bandido", raca: "Nelore", categoria: "Bovino", proprietario: "João Silva", status: "Ativo" },
  { id: 2, identificacao: "Mimosa", raca: "Holandesa", categoria: "Bovino", proprietario: "Maria Fernandes", status: "Inativo" },
  { id: 3, identificacao: "Rex", raca: "Labrador", categoria: "Canino", proprietario: "Carlos Eduardo", status: "Ativo" },
  { id: 4, identificacao: "Pé de Pano", raca: "Quarto de Milha", categoria: "Equino", proprietario: "Ana Beatriz", status: "Em andamento" },
  { id: 5, identificacao: "Bolinha", raca: "Vira-lata", categoria: "Canino", proprietario: "Roberto Alves", status: "Ativo" },
  { id: 6, identificacao: "Tornado", raca: "Mangalarga", categoria: "Equino", proprietario: "Lucia Costa", status: "Ativo" },
  { id: 7, identificacao: "Miau", raca: "Siamês", categoria: "Felino", proprietario: "Fernando Souza", status: "Inativo" },
  { id: 8, identificacao: "Estrela", raca: "Girolando", categoria: "Equino", proprietario: "Juliana Mendes", status: "Ativo" },
];

export default function Animais() {
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
    { field: "identificacao", headerName: "Identificação", flex: 1, minWidth: 150 },
    { field: "raca", headerName: "Raça", flex: 1, minWidth: 150 },
    { field: "categoria", headerName: "Categoria", flex: 1, minWidth: 120 },
    { field: "proprietario", headerName: "Proprietário / Fazenda", flex: 1.5, minWidth: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        return <StatusChip status={params.value as string} />;
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
          <IconButton 
            size="small" 
            onClick={(e) => handleMenuClick(e, params.row.id as number)}
            aria-label="ações"
          >
            <FiMoreVertical />
          </IconButton>
        );
      },
    },
  ];

  return (
    <AppLayout title="Animais">
      <PageHeader 
        title="Animais" 
        description="Gerencie todos os animais, pacientes e rebanhos da clínica." 
        showButton={true}
        titleButton="Novo Animal"
        onClickButton={() => router.push("/app/animais/novo")}
      />

      <Card elevation={0} sx={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
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
              minWidth: "150px",
            },
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: "0.875rem", gap: 1.5 }}>
          <FiEye size={16} /> Ver Detalhes
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: "0.875rem", gap: 1.5 }}>
          <FiEdit2 size={16} /> Editar
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: "0.875rem", gap: 1.5, color: "#dc3545" }}>
          <FiTrash2 size={16} /> Excluir
        </MenuItem>
      </Menu>
    </AppLayout>
  );
}
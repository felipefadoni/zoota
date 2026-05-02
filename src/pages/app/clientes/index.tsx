import { Box, Card, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { FiEdit2, FiEye, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";
import StatusChip from "../../../components/ui/StatusChip";

// Mock Data for the Table
const rows = [
  { id: 1, clientName: "Fazenda Boa Vista", owner: "João Silva", location: "Ribeirão Preto, SP", status: "Ativo" },
  { id: 2, clientName: "Rancho Fundo", owner: "Maria Fernandes", location: "Uberlândia, SP", status: "Inativo" },
  { id: 3, clientName: "Estância Santa Luzia", owner: "Carlos Eduardo", location: "Franca, SP", status: "Ativo" },
  { id: 4, clientName: "Fazenda São José", owner: "Ana Beatriz", location: "Barretos, SP", status: "Pendente" },
  { id: 5, clientName: "Sítio do Pica-Pau", owner: "Roberto Alves", location: "Bauru, SP", status: "Ativo" },
  { id: 6, clientName: "Fazenda Esperança", owner: "Lucia Costa", location: "São Carlos, SP", status: "Ativo" },
  { id: 7, clientName: "Haras Vitória", owner: "Fernando Souza", location: "Campinas, SP", status: "Inativo" },
  { id: 8, clientName: "Fazenda Primavera", owner: "Juliana Mendes", location: "Araraquara, SP", status: "Ativo" },
];

export default function Clientes() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const columns: GridColDef[] = [
    { field: "clientName", headerName: "Fazenda/Cliente", flex: 1, minWidth: 200 },
    { field: "owner", headerName: "Proprietário", flex: 1, minWidth: 150 },
    { field: "location", headerName: "Localização", flex: 1, minWidth: 180 },
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
          <>
            <IconButton size="small" onClick={(e) => handleMenuClick(e, params.row.id as number)} aria-label="ações">
              <FiMoreVertical />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <AppLayout title="Clientes">
      <PageHeader title="Clientes" description="Gerencie suas fazendas, clientes e proprietários." showButton={true} titleButton="Novo Cliente" onClickButton={() => router.push("/app/clientes/novo")} />

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

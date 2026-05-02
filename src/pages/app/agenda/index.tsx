import { Box, Card, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type React from "react";
import { useState } from "react";
import { FiCheckCircle, FiEdit2, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";
import StatusChip from "../../../components/ui/StatusChip";

// Mock Data for the Table
const rows = [
  { id: 1, date: "2024-05-15", time: "08:00", client: "Fazenda Boa Vista", animal: "Pé de Pano", reason: "Consulta de Rotina", status: "Agendado" },
  { id: 2, date: "2024-05-15", time: "10:30", client: "Rancho Fundo", animal: "Mimosa", reason: "Vacinação", status: "Concluído" },
  { id: 3, date: "2024-05-16", time: "09:00", client: "Estância Santa Luzia", animal: "Bandido", reason: "Exame de Sangue", status: "Agendado" },
  { id: 4, date: "2024-05-17", time: "14:00", client: "Haras Vitória", animal: "Ventania", reason: "Problema no casco", status: "Atrasado" },
  { id: 5, date: "2024-05-18", time: "16:30", client: "Sítio do Pica-Pau", animal: "Estrela", reason: "Retorno", status: "Agendado" },
];

export default function Agenda() {
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
    { field: "date", headerName: "Data", flex: 0.5, minWidth: 100 },
    { field: "time", headerName: "Horário", flex: 0.4, minWidth: 80 },
    { field: "client", headerName: "Cliente/Propriedade", flex: 1, minWidth: 180 },
    { field: "animal", headerName: "Animal", flex: 0.8, minWidth: 120 },
    { field: "reason", headerName: "Motivo da Visita", flex: 1, minWidth: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return <StatusChip status={params.value as string} />;
      },
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 80,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <IconButton size="small" onClick={(e) => handleMenuClick(e, params.row.id as number)} aria-label="ações">
            <FiMoreVertical />
          </IconButton>
        );
      },
    },
  ];

  return (
    <AppLayout title="Agenda de Visitas">
      <PageHeader title="Agenda" description="Gerencie seus agendamentos de visitas e consultas." showButton={true} titleButton="Nova Visita" onClickButton={() => console.log("Nova Visita Clicked")} />

      <Card elevation={0} sx={{ borderRadius: "14px", border: "1px solid #e0e0e0" }}>
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

      {/* Menu de Ações da Agenda */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            elevation: 2,
            sx: { borderRadius: "8px", minWidth: 180 },
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, fontSize: "14px" }}>
          <FiCheckCircle style={{ marginRight: 12, color: "#2e7d32" }} /> Marcar como Concluído
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, fontSize: "14px" }}>
          <FiEdit2 style={{ marginRight: 12, color: "#666" }} /> Editar Agendamento
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, color: "error.main", fontSize: "14px" }}>
          <FiTrash2 style={{ marginRight: 12 }} /> Cancelar Visita
        </MenuItem>
      </Menu>
    </AppLayout>
  );
}

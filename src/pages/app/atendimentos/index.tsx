import { Box, Card, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle, FiEdit2, FiEye, FiMail, FiMoreVertical, FiTrash2 } from "react-icons/fi";
import AppLayout from "../../../components/layout/AppLayout";
import PageHeader from "../../../components/layout/PageHeader";
import StatusChip from "../../../components/ui/StatusChip";

// Mock Data for the Table
const rows = [
  { id: 1, invoice: "FAT-001", date: "2024-05-10", client: "Fazenda Boa Vista", servicesCount: 3, totalValue: "R$ 1.500,00", status: "Pago" },
  { id: 2, invoice: "FAT-002", date: "2024-05-12", client: "Rancho Fundo", servicesCount: 1, totalValue: "R$ 350,00", status: "Pendente" },
  { id: 3, invoice: "FAT-003", date: "2024-05-15", client: "Estância Santa Luzia", servicesCount: 5, totalValue: "R$ 2.800,00", status: "Atrasado" },
  { id: 4, invoice: "FAT-004", date: "2024-05-18", client: "Fazenda São José", servicesCount: 2, totalValue: "R$ 800,00", status: "Pago" },
  { id: 5, invoice: "FAT-005", date: "2024-05-20", client: "Sítio do Pica-Pau", servicesCount: 4, totalValue: "R$ 1.200,00", status: "Pendente" },
];

export default function Atendimentos() {
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
    { field: "invoice", headerName: "Fatura", flex: 0.5, minWidth: 100 },
    { field: "date", headerName: "Data", flex: 0.5, minWidth: 120 },
    { field: "client", headerName: "Cliente", flex: 1, minWidth: 200 },
    { field: "servicesCount", headerName: "Qtd Serviços", flex: 0.5, minWidth: 120, align: "center", headerAlign: "center" },
    { field: "totalValue", headerName: "Valor Total", flex: 0.8, minWidth: 150 },
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
          <IconButton size="small" onClick={(e) => handleMenuClick(e, params.row.id as number)} aria-label="ações">
            <FiMoreVertical />
          </IconButton>
        );
      },
    },
  ];

  return (
    <AppLayout title="Atendimentos">
      <PageHeader title="Atendimentos" description="Gerencie os atendimentos e faturas da clínica." showButton={true} titleButton="Novo Atendimento" onClickButton={() => router.push("/app/atendimentos/novo")} />

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

      {/* Menu de Ações */}
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
          <FiEye style={{ marginRight: 12, color: "#666" }} /> Visualizar
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, fontSize: "14px" }}>
          <FiEdit2 style={{ marginRight: 12, color: "#666" }} /> Editar Atendimento
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, fontSize: "14px" }}>
          <FaWhatsapp style={{ marginRight: 12, color: "#25D366" }} /> Compartilhar Cobrança Whatsapp
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, fontSize: "14px" }}>
          <FiMail style={{ marginRight: 12, color: "#666" }} /> Enviar Email de Cobrança
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, fontSize: "14px" }}>
          <FiCheckCircle style={{ marginRight: 12, color: "#1976d2" }} /> Informar Pagamento Manual
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleMenuClose} sx={{ py: 1.5, px: 2, color: "error.main", fontSize: "14px" }}>
          <FiTrash2 style={{ marginRight: 12 }} /> Excluir
        </MenuItem>
      </Menu>
    </AppLayout>
  );
}

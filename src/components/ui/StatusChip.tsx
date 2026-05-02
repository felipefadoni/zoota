import { Chip } from "@mui/material";

interface StatusChipProps {
  status: string;
}

export default function StatusChip({ status }: StatusChipProps) {
  let color: "success" | "error" | "warning" | "default" | "info" = "default";

  const lowerStatus = status.toLowerCase();

  if (lowerStatus === "ativo" || lowerStatus === "concluído" || lowerStatus === "pago") {
    color = "success";
  } else if (lowerStatus === "inativo" || lowerStatus === "cancelado" || lowerStatus === "atrasado") {
    color = "error";
  } else if (lowerStatus === "pendente" || lowerStatus === "em andamento" || lowerStatus === "a receber") {
    color = "warning";
  } else if (lowerStatus === "agendado") {
    color = "info";
  }

  return <Chip label={status} color={color} size="small" sx={{ fontWeight: 500 }} />;
}

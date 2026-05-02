import { Box, Button, Typography } from "@mui/material";
import { FiPlus } from "react-icons/fi";

interface PageHeaderProps {
  title: string;
  description: string;
  showButton?: boolean;
  titleButton?: string;
  onClickButton?: () => void;
}

export default function PageHeader({ title, description, showButton = false, titleButton = "Adicionar", onClickButton }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2 }}>
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#333" }}>{title}</Typography>
        <Typography variant="body1" sx={{ color: "#777", mt: 0.5 }}>
          {description}
        </Typography>
      </Box>
      {showButton && (
        <Button
          variant="contained"
          disableElevation
          onClick={onClickButton}
          startIcon={<FiPlus />}
          sx={{
            backgroundColor: "primary.main",
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 500,
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          {titleButton}
        </Button>
      )}
    </Box>
  );
}

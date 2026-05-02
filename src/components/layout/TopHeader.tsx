import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { drawerWidth } from "./Sidebar";

interface TopHeaderProps {
  title: string;
  handleDrawerToggle: () => void;
}

export default function TopHeader({ title, handleDrawerToggle }: TopHeaderProps) {
  const router = useRouter();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        backgroundColor: "white",
        color: "#333",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
            <FiMenu />
          </IconButton>
          {/* Oculta o título no desktop se já houver um PageHeader, ou mostra caso queira manter o padrão */}
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, display: { xs: "block", md: "none" } }}>
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            ml: "auto",
            p: 0.5,
            borderRadius: "30px",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
          }}
          onClick={() => router.push("/app/configuracoes")}
        >
          <Typography sx={{ fontWeight: 500, fontSize: "14px", display: { xs: "none", sm: "block" } }}>Usuário Administrador</Typography>
          <Avatar sx={{ width: 36, height: 36, bgcolor: "primary.main", fontSize: "14px", fontWeight: "bold" }}>UA</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiActivity, FiFileText, FiHeart, FiHome, FiLogOut, FiSettings, FiUsers } from "react-icons/fi";

export const drawerWidth = 260;

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { text: "Dashboard", icon: <FiHome />, path: "/app/dashboard" },
    { text: "Clientes", icon: <FiUsers />, path: "/app/clientes" },
    { text: "Animais", icon: <FiHeart />, path: "/app/animais" },
    { text: "Serviços", icon: <FiActivity />, path: "/app/servicos" },
    { text: "Atendimentos", icon: <FiFileText />, path: "/app/atendimentos" },
    { text: "Configurações", icon: <FiSettings />, path: "/app/configuracoes" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", backgroundColor: "primary.main" }}>
      <Toolbar sx={{ backgroundColor: "transparent", color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>ZooTa Logo</title>
            <path d="M6 4v10c0 3.314 2.686 6 6 6s6-2.686 6-6V9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 4v5" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600 }}>
            ZooTa
          </Typography>
        </Box>
      </Toolbar>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <List sx={{ flex: 1, px: 2, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = router.pathname === item.path || router.pathname.startsWith(`${item.path}/`);

          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <Link href={item.path} passHref style={{ textDecoration: "none", width: "100%" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={<Typography sx={{ fontWeight: isActive ? 600 : 400, color: isActive ? "white" : "rgba(255,255,255,0.8)" }}>{item.text}</Typography>} />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <List sx={{ px: 2, pb: 2 }}>
        <ListItem disablePadding>
          <Link href="/app/authentication/login" passHref style={{ textDecoration: "none", width: "100%" }}>
            <ListItemButton
              sx={{
                borderRadius: "8px",
                color: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>
                <FiLogOut />
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{ fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>Sair</Typography>} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

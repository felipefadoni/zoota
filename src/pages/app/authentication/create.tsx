import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

export default function CreateAccount() {
  const [openTerms, setOpenTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleOpenTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenTerms(true);
  };

  const handleCloseTerms = () => {
    setOpenTerms(false);
  };

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    setOpenTerms(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, minHeight: "100vh", width: "100vw", margin: 0, padding: 0, overflowX: "hidden" }}>
        {/* Left Side */}
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            minHeight: { xs: "50vh", md: "100vh" },
            backgroundColor: "primary.main",
            color: "white",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            padding: { xs: "20px", sm: "40px", md: "40px 60px" },
            position: "relative",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>ZootaPro Logo</title>
              <path d="M6 4v10c0 3.314 2.686 6 6 6s6-2.686 6-6V9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 4v5" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.4rem", letterSpacing: "0.5px" }}>
              ZootaPro
            </Typography>
          </Box>

          {/* Illustration Area */}
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* A mock illustration composed of SVGs */}
            <Box sx={{ position: "relative", width: "250px", height: "250px" }}>
              {/* Background shapes */}
              <Box sx={{ position: "absolute", top: "20%", left: "10%", width: "80%", height: "80%", backgroundColor: "primary.dark", borderRadius: "12px", transform: "rotate(-10deg)" }} />
              <Box sx={{ position: "absolute", top: "30%", left: "0%", width: "100%", height: "30%", backgroundColor: "primary.light", borderRadius: "20px", zIndex: 0 }} />

              {/* Clipboard */}
              <Box
                sx={{
                  position: "absolute",
                  top: "15%",
                  left: "20%",
                  width: "60%",
                  height: "75%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  zIndex: 1,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transform: "rotate(-10deg)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 15px",
                }}
              >
                <Box sx={{ width: "40px", height: "10px", backgroundColor: "#e0e0e0", borderRadius: "5px", position: "absolute", top: "-5px", border: "2px solid #a0a0a0" }} />

                {/* Checklist items */}
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", mt: 1, gap: 1 }}>
                  <Typography sx={{ color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>✓</Typography>
                  <Box sx={{ height: "4px", width: "70%", backgroundColor: "#e0e0e0", borderRadius: "2px" }} />
                </Box>
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", mt: 1.5, gap: 1 }}>
                  <Typography sx={{ color: "#f71644", fontWeight: "bold", fontSize: "1rem" }}>✕</Typography>
                  <Box sx={{ height: "4px", width: "60%", backgroundColor: "#e0e0e0", borderRadius: "2px" }} />
                </Box>
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", mt: 1.5, gap: 1 }}>
                  <Typography sx={{ color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>✓</Typography>
                  <Box sx={{ height: "4px", width: "80%", backgroundColor: "#e0e0e0", borderRadius: "2px" }} />
                </Box>
              </Box>

              {/* Pen */}
              <Box sx={{ position: "absolute", bottom: "15%", left: "5%", width: "80px", height: "20px", backgroundColor: "#3a332e", borderRadius: "10px", zIndex: 2, transform: "rotate(35deg)", border: "2px solid white" }}>
                <Box sx={{ position: "absolute", right: "-10px", top: "4px", width: "0", height: "0", borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "8px solid #3a332e" }} />
              </Box>
            </Box>
          </Box>

          {/* Text at the bottom */}
          <Box sx={{ mb: 4, width: "80%" }}>
            <Typography variant="h3" sx={{ fontWeight: 400, mb: 2, fontSize: "2.5rem" }}>
              Junte-se a nós!
            </Typography>
            <Typography variant="body1" sx={{ color: "#e0eaff", fontSize: "1.1rem", lineHeight: 1.5 }}>
              Tenha uma intranet real em cima do seu ambiente
              <br />
              Office 365, com o ZootaPro.
            </Typography>
          </Box>

          {/* Pagination Dots */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
            <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "white" }} />
            <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "transparent", border: "1px solid white" }} />
            <Box sx={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "transparent", border: "1px solid white" }} />
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            minHeight: { xs: "100vh", md: "100vh" },
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "20px", sm: "40px" },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: "380px" }, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1, mb: 4, color: "primary.main" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>ZootaPro Logo Mobile</title>
                <path d="M6 4v10c0 3.314 2.686 6 6 6s6-2.686 6-6V9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 4v5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.4rem", letterSpacing: "0.5px", color: "primary.main" }}>
                ZootaPro
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ color: "primary.main", mb: { xs: 2, md: 3 }, fontWeight: 500, fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
              Criar Conta
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ color: "#888", display: "inline" }}>
                Já tem uma conta?{" "}
              </Typography>
              <Link href="/app/authentication/login" underline="none" sx={{ color: "primary.main", fontWeight: 500, fontSize: "0.875rem" }}>
                Entrar
              </Link>
            </Box>

            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                placeholder="Nome"
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiUser color="#b0b0b0" />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "#333",
                      "&:before": { borderBottomColor: "#e0e0e0" },
                      "&:after": { borderBottomColor: "primary.main" },
                      pb: 0.5,
                    },
                  },
                }}
              />

              <TextField
                placeholder="Email"
                variant="standard"
                type="email"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiMail color="#b0b0b0" />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "#333",
                      "&:before": { borderBottomColor: "#e0e0e0" },
                      "&:after": { borderBottomColor: "primary.main" },
                      pb: 0.5,
                    },
                  },
                }}
              />

              <TextField
                placeholder="WhatsApp"
                variant="standard"
                type="tel"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <FiPhone color="#b0b0b0" />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "#333",
                      "&:before": { borderBottomColor: "#e0e0e0" },
                      "&:after": { borderBottomColor: "primary.main" },
                      pb: 0.5,
                    },
                  },
                }}
              />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                <FormControlLabel
                  control={<Checkbox size="small" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} sx={{ color: "#b0b0b0", "&.Mui-checked": { color: "primary.main" } }} />}
                  label={
                    <Typography sx={{ fontSize: "0.875rem", color: "#888" }}>
                      Eu concordo com os{" "}
                      <Link href="#" onClick={handleOpenTerms} underline="hover" sx={{ color: "primary.main" }}>
                        Termos e Condições
                      </Link>
                    </Typography>
                  }
                />

                <Button
                  variant="contained"
                  disableElevation
                  disabled={!acceptedTerms}
                  sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    fontWeight: 500,
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "#e0e0e0",
                      color: "#a0a0a0",
                    },
                  }}
                >
                  Cadastrar-se
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Terms and Conditions Dialog */}
      <Dialog
        open={openTerms}
        onClose={handleCloseTerms}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              padding: "10px",
            },
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title" sx={{ color: "primary.main", fontWeight: 600 }}>
          Termos e Condições
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1} sx={{ color: "#333", lineHeight: 1.6 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#444" }}>
              1. Aceitação dos Termos
            </Typography>
            <Typography component="p" sx={{ fontSize: "0.95rem", color: "#666", mb: 2 }}>
              Ao criar uma conta e usar a plataforma ZootaPro, você concorda em ficar vinculado a estes Termos e Condições. Se você não concordar com todos os termos e condições, então você não pode acessar o site ou usar quaisquer
              serviços.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#444", mt: 3 }}>
              2. Contas de Usuário
            </Typography>
            <Typography component="p" sx={{ fontSize: "0.95rem", color: "#666", mb: 2 }}>
              Quando você cria uma conta conosco, você deve fornecer informações que sejam precisas, completas e atuais em todos os momentos. O não cumprimento disso constitui uma violação dos Termos, o que pode resultar na rescisão
              imediata de sua conta em nosso Serviço.
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#444", mt: 3 }}>
              3. Política de Privacidade
            </Typography>
            <Typography component="p" sx={{ fontSize: "0.95rem", color: "#666", mb: 2 }}>
              O uso do Serviço também está sujeito à nossa Política de Privacidade. Nós coletamos, usamos e compartilhamos suas informações pessoais de acordo com esta política, o que nos ajuda a fornecer e melhorar nossos serviços para
              você.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "16px 24px" }}>
          <Button onClick={handleCloseTerms} sx={{ color: "#888", textTransform: "none", fontWeight: 500 }}>
            Cancelar
          </Button>
          <Button
            onClick={handleAcceptTerms}
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Eu Aceito
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

const COLORS = {
  light: "#FAF8F5",
  textMain: "#332E2C",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Sistema Veterinário para Grandes Animais e Haras | ZooTa</title>
        <meta name="description" content="O melhor sistema de gestão para clínicas veterinárias rurais, haras e fazendas. Centralize prontuários de equinos e bovinos, vacinas, faturamentos e agendamentos." />
        <meta name="keywords" content="sistema veterinário, software para veterinários, grandes animais, equinos, bovinos, gestão de haras, prontuário eletrônico veterinário, clínica veterinária rural" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Sistema Veterinário para Grandes Animais e Haras | ZooTa" />
        <meta property="og:description" content="O melhor sistema de gestão para clínicas veterinárias rurais, haras e fazendas. Centralize prontuários de equinos e bovinos, vacinas e faturamentos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zoota.com.br/" />
        <meta property="og:site_name" content="ZooTa" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://zoota.com.br/" />
      </Head>

      <Box sx={{ fontFamily: "'Inter', sans-serif", color: COLORS.textMain, overflowX: "hidden", backgroundColor: COLORS.light }}>
        <Header />
        
        <Box component="main">
          <Hero />
          <Features />
          <CTA />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
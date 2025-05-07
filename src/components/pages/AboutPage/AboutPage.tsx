"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Email,
  GitHub,
  Instagram,
  Language,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { Adsense } from "@/components/Adsense";

export const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src="/autor.jpeg"
              alt="Foto de perfil"
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "cover",
                border: `4px solid ${theme.palette.primary.main}`,
              }}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/200";
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h1"
              gutterBottom
            >
              Olá, sou o Maykon Sousa
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Desenvolvedor Full Stack apaixonado por tecnologia e inovação
            </Typography>
            <Typography variant="body1">
              Sou especializado em desenvolvimento web com React, TypeScript e
              Node.js. Minha paixão é criar aplicações intuitivas e eficientes
              que resolvam problemas reais. Este gerador de selos para fotos de
              perfil é um dos meus projetos pessoais que desenvolvi apenas para
              diversão.
            </Typography>
            <Typography variant="body1">
              Hoje eu atuo profissionalmente no Mercado Livre e também já passei
              por outras empresas como PagBank, RaDix, Nutrien e Stefanini
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <IconButton
                aria-label="github"
                color="primary"
                component={Link}
                href="https://github.com/maykonsousa"
                target="_blank"
              >
                <GitHub fontSize={isMobile ? "medium" : "large"} />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                color="primary"
                component={Link}
                href="https://linkedin.com/in/maykonsousa"
                target="_blank"
              >
                <LinkedIn fontSize={isMobile ? "medium" : "large"} />
              </IconButton>
              <IconButton
                aria-label="instagram"
                color="primary"
                component={Link}
                href="https://www.instagram.com/mykesousa/"
                target="_blank"
              >
                <Instagram fontSize={isMobile ? "medium" : "large"} />
              </IconButton>
              <IconButton
                aria-label="email"
                color="primary"
                component={Link}
                href="mailto:maykon.sousa@hotmail.com"
              >
                <Email fontSize={isMobile ? "medium" : "large"} />
              </IconButton>
              <IconButton
                aria-label="whatsapp"
                color="primary"
                component={Link}
                href="https://wa.me/55619929432979"
                target="_blank"
              >
                <WhatsApp fontSize={isMobile ? "medium" : "large"} />
              </IconButton>
              <IconButton
                aria-label="Site Pessoal"
                color="primary"
                component={Link}
                href="https://maykonsousa.dev.br"
                target="_blank"
              >
                <Language fontSize={isMobile ? "medium" : "large"} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Anúncio após a seção de introdução */}
      <Box sx={{ width: "100%", my: 3 }}>
        <Adsense adSlot="3692581470" adFormat="horizontal" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 3, fontWeight: "medium" }}
        >
          Sobre o Projeto
        </Typography>
        <Typography variant="body1" paragraph>
          O Meu Selo é uma ferramenta que permite adicionar selos personalizados
          às suas fotos de perfil. Ideal para destacar status profissional,
          causas apoiadas ou qualquer mensagem que queira compartilhar em suas
          redes sociais.
        </Typography>
        <Typography variant="body1" paragraph>
          O projeto foi desenvolvido utilizando Next.js, TypeScript, Material UI
          e outras tecnologias modernas para garantir uma experiência de usuário
          fluida e responsiva em qualquer dispositivo.
        </Typography>
      </Box>

      {/* Anúncio após a seção sobre o projeto */}
      <Box sx={{ width: "100%", my: 3 }}>
        <Adsense adSlot="7418529630" adFormat="rectangle" />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Outros Projetos
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: "Portfolio Pessoal",
              description:
                "Meu site pessoal. Confesso que anda oum pouco abandonado mas logo eu vou retomar o seu Desenvolvimento",
              image: "/site.png",
              link: "https://maykonsousa.dev.br",
            },

            {
              title: "DevPool",
              description:
                "DevPool é uma plataforma de empregos para desenvolvedores. Eu fiz o desenvolvimento do Frontend e o Backend",
              image: "/devpool.png",
              link: "https://devpoolbr.com.br",
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography>{project.description}</Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Link href={project.link} target="_blank" underline="none">
                    Ver projeto
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ mb: 3, fontWeight: "medium" }}
        >
          Tecnologias Utilizadas
        </Typography>
        <Typography variant="body1" paragraph>
          O projeto foi desenvolvido utilizando Next.js, TypeScript, Material UI
          e outras tecnologias modernas para garantir uma experiência de usuário
          fluida e responsiva em qualquer dispositivo.
        </Typography>
      </Box>

      {/* Anúncio após a lista de tecnologias */}
      <Box sx={{ width: "100%", my: 3 }}>
        <Adsense adSlot="8529637410" adFormat="horizontal" />
      </Box>
    </Container>
  );
};

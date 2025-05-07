import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ImageIcon from "@mui/icons-material/Image";
import PaletteIcon from "@mui/icons-material/Palette";
import DownloadIcon from "@mui/icons-material/Download";
import CropIcon from "@mui/icons-material/Crop";
import Link from "next/link";
import Image from "next/image";
import { Adsense } from "@/components/Adsense";

export function LandingPageStaticContent() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        component="section"
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 6, sm: 8, md: 12 },
          mb: { xs: 4, md: 6 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
          >
            <Box sx={{ flex: { md: 7 }, width: "100%" }}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Crie o seu selo personalizado
              </Typography>
              <Typography
                variant="h2"
                component="p"
                gutterBottom
                sx={{
                  mb: 4,
                  maxWidth: "90%",
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                A ferramenta online gratuita para criar seu próprio selo para o
                Linkedin e outras redes sociais
              </Typography>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/stamp"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 2,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  Começar agora
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                flex: { md: 5 },
                width: "100%",
                display: { xs: "none", md: "block" },
                position: "relative",
                height: "400px",
              }}
            >
              <Image
                src="/images/example1.png"
                alt="Exemplo de selo personalizado para perfil profissional"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
                priority
                quality={90}
              />
            </Box>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ my: 3 }}>
        <Adsense adSlot="1234567890" adFormat="horizontal" />
      </Container>

      <Container
        maxWidth="lg"
        component="section"
        sx={{ mb: { xs: 5, md: 8 } }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: "medium",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Principais Recursos
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fill, minmax(240px, 1fr))",
              md: "repeat(auto-fill, minmax(250px, 1fr))",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Card
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                p: { xs: 2, md: 3 },
              }}
            >
              <ImageIcon
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  color: "primary.main",
                  mb: 2,
                }}
              />
              <Typography
                gutterBottom
                variant="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Upload de Imagens
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Faça upload de suas próprias imagens para adicionar selos
                personalizados.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                p: { xs: 2, md: 3 },
              }}
            >
              <PaletteIcon
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  color: "primary.main",
                  mb: 2,
                }}
              />
              <Typography
                gutterBottom
                variant="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Personalização
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Escolha o texto, formato da imagem, cores e opacidade para criar
                o selo perfeito
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                p: { xs: 2, md: 3 },
              }}
            >
              <DownloadIcon
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  color: "primary.main",
                  mb: 2,
                }}
              />
              <Typography
                gutterBottom
                variant="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Download Fácil
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Baixe sua imagem personalizada com um clique para usar em
                qualquer rede social.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                p: { xs: 2, md: 3 },
              }}
            >
              <CropIcon
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  color: "primary.main",
                  mb: 2,
                }}
              />
              <Typography
                gutterBottom
                variant="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Formatos Variados
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Escolha entre formatos circulares ou quadrados para melhor se
                adequar ao seu perfil.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ my: 3 }}>
        <Adsense adSlot="0987654321" adFormat="rectangle" />
      </Container>

      <Box
        component="section"
        sx={{ bgcolor: "background.paper", py: { xs: 5, md: 8 } }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 6 },
              fontWeight: "medium",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            }}
          >
            Como Funciona
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 4 }}
            alignItems="center"
          >
            <Box sx={{ flex: { md: 1 }, width: "100%" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "300px", md: "400px" },
                  maxWidth: { xs: "300px", md: "100%" },
                  mx: "auto",
                }}
              >
                <Image
                  src="/images/example2.png"
                  alt="Tutorial de como criar seu selo personalizado"
                  fill
                  sizes="(max-width: 768px) 300px, 600px"
                  style={{
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                  priority={false}
                  quality={90}
                />
              </Box>
            </Box>
            <Box sx={{ flex: { md: 1 }, width: "100%" }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        Passo 1: Escolha seu formato
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          mt: 0.5,
                        }}
                      >
                        Selecione entre formato circular ou quadrado para seu
                        selo.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        Passo 2: Faça upload da sua imagem
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          mt: 0.5,
                        }}
                      >
                        Carregue a foto que você deseja personalizar com o selo.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        Passo 3: Personalize seu selo
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          mt: 0.5,
                        }}
                      >
                        Ajuste o texto, cores e posicionamento do seu selo.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        Passo 4: Baixe ou compartilhe
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          mt: 0.5,
                        }}
                      >
                        Baixe a imagem final ou compartilhe diretamente nas suas
                        redes sociais.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 3 }}>
        <Adsense adSlot="5678901234" adFormat="horizontal" />
      </Container>

      <Container
        maxWidth="lg"
        component="section"
        sx={{ my: { xs: 5, md: 8 } }}
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: "medium",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Por que usar nosso gerador de selos?
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
          }}
        >
          <Card sx={{ flex: 1 }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                variant="h3"
                gutterBottom
                color="primary"
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Para Uso Pessoal
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Destaque seu status profissional (#OpenToWork)
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Promova causas que você apoia
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Comemore conquistas ou ocasiões especiais
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Personalize seu perfil em todas as redes sociais
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                variant="h3"
                gutterBottom
                color="primary"
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Para Empresas e Marcas
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Crie selos para toda sua equipe com identidade visual
                        consistente
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Destaque produtos ou serviços específicos
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Aumente a visibilidade em eventos ou lançamentos
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Crie campanhas a partir do uso do seu selo
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Box
        component="section"
        sx={{
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
          >
            Pronto para criar seus selos personalizados?
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              maxWidth: { xs: "90%", md: "100%" },
              mx: "auto",
            }}
          >
            Comece agora mesmo, totalmente grátis e sem necessidade de cadastro!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/stamp"
            sx={{
              py: { xs: 1.25, md: 1.5 },
              px: { xs: 3, md: 4 },
              borderRadius: 2,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Criar meu selo
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

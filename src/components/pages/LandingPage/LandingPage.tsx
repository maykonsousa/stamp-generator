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
  Divider,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ImageIcon from "@mui/icons-material/Image";
import PaletteIcon from "@mui/icons-material/Palette";
import DownloadIcon from "@mui/icons-material/Download";
import CropIcon from "@mui/icons-material/Crop";
import Link from "next/link";

export function LandingPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
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
                variant="h2"
                component="h1"
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
                variant="h5"
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
              }}
            >
              <Box
                component="img"
                src="/images/example1.png"
                alt="Exemplo de selo"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                  mx: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: { xs: 5, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
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
                variant="h5"
                component="h3"
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
                variant="h5"
                component="h3"
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
              <CropIcon
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  color: "primary.main",
                  mb: 2,
                }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Vários Formatos
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Escolha entre o formato Circle, que é ideal para o perfil do
                Linkedin ou Square ideal para posts e perfil do Slack
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
                variant="h5"
                component="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Download rápido
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                Faça o download da sua imagem personalizada na hora e sem
                qualquer pegadinha de cadastro ou pagamento
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "background.paper", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
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
                component="img"
                src="/images/example2.png"
                alt="Como funciona"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                  mx: "auto",
                  display: "block",
                  maxWidth: { xs: "300px", md: "100%" },
                }}
              />
            </Box>
            <Box sx={{ flex: { md: 1 }, width: "100%" }}>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
                    >
                      1
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                      >
                        Faça upload de sua imagem
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                      >
                        Carregue qualquer imagem de seu computador ou
                        dispositivo móvel.
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" variant="inset" />

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
                    >
                      2
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                      >
                        Personalize seu selo
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                      >
                        Escolha o formato, cor, texto e posicionamento do seu
                        selo.
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" variant="inset" />

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Typography
                      variant="h4"
                      color="primary"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" } }}
                    >
                      3
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                      >
                        Baixe ou compartilhe
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                      >
                        Baixe a imagem com o selo em alta resolução ou
                        compartilhe o seu template para que outras pessoas
                        possam usar.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>

              <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/stamp"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    py: { xs: 1, md: 1.5 },
                    px: { xs: 3, md: 4 },
                  }}
                >
                  Experimentar agora
                </Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: { xs: 5, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
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
                variant="h5"
                component="h3"
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
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Crie seus próprios selos para redes sociais
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
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Engaje seus seguidores a entrarem na onda
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
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Compartilhe seu modelo para seus amigos usarem
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
                variant="h5"
                component="h3"
                gutterBottom
                color="primary"
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Para Uso Profissional
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Personalize suas fotos com a sua marca
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
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Compartilhe o seu modelo para seus seguires e clientes
                        usarem
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
        sx={{
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
          >
            Pronto para criar seus selos personalizados?
          </Typography>
          <Typography
            variant="h6"
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

      <Container maxWidth="md" sx={{ my: { xs: 5, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: "medium",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Perguntas Frequentes
        </Typography>

        <Box>
          <Paper elevation={1} sx={{ p: { xs: 2, md: 3 }, mb: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              O serviço é realmente gratuito?
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Sim, o nosso gerador de selos é completamente gratuito para uso.
              Não há custos ocultos ou limitações.
            </Typography>
          </Paper>

          <Paper elevation={1} sx={{ p: { xs: 2, md: 3 }, mb: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              Quais formatos de imagem são suportados?
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Nosso gerador suporta os formatos mais comuns, incluindo JPG, PNG,
              GIF e SVG.
            </Typography>
          </Paper>

          <Paper elevation={1} sx={{ p: { xs: 2, md: 3 }, mb: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              Posso usar os selos para fins comerciais?
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Sim, os selos que você cria são de sua propriedade e podem ser
              usados para qualquer finalidade, incluindo projetos comerciais.
            </Typography>
          </Paper>

          <Paper elevation={1} sx={{ p: { xs: 2, md: 3 } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
            >
              Preciso criar uma conta para usar o serviço?
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
              Não, não é necessário criar uma conta, mas caso você queira
              compartilhar o seu selo para outros usuários usarem, precisa
              guardar bem o link gerado pois não será possível recuperá-lo.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

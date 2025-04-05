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
          py: { xs: 8, md: 12 },
          mb: 6,
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
          >
            <Box sx={{ flex: { md: 7 }, width: "100%" }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Crie o seu selo personalizado
              </Typography>
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{ mb: 4, maxWidth: "90%" }}
              >
                A ferramenta online gratuita para criar seu próprio selo para o
                Linkedin e outras redes sociais
              </Typography>
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
                  fontSize: "1.1rem",
                }}
              >
                Começar agora
              </Button>
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
                alt="Exemplo de carimbo"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "medium" }}
        >
          Principais Recursos
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            flexWrap: "wrap",
            gap: 4,
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
              }}
            >
              <ImageIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography gutterBottom variant="h5" component="h3">
                Upload de Imagens
              </Typography>
              <Typography>
                Faça upload de suas próprias imagens para adicionar carimbos
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
              }}
            >
              <PaletteIcon
                sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
              />
              <Typography gutterBottom variant="h5" component="h3">
                Personalização
              </Typography>
              <Typography>
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
              }}
            >
              <CropIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
              <Typography gutterBottom variant="h5" component="h3">
                Vários Formatos
              </Typography>
              <Typography>
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
              }}
            >
              <DownloadIcon
                sx={{ fontSize: 60, color: "primary.main", mb: 2 }}
              />
              <Typography gutterBottom variant="h5" component="h3">
                Download rápido
              </Typography>
              <Typography>
                Faça o download da sua imagem personalizada na hora e sem
                qualquer pegadinha de cadastro ou pagamento
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* How It Works */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: "medium" }}
          >
            Como Funciona
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
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
                }}
              />
            </Box>
            <Box sx={{ flex: { md: 1 }, width: "100%" }}>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      1
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        Faça upload de sua imagem
                      </Typography>
                    }
                    secondary="Carregue qualquer imagem de seu computador ou dispositivo móvel."
                  />
                </ListItem>
                <Divider component="li" variant="inset" />

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      2
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        Personalize seu carimbo
                      </Typography>
                    }
                    secondary="Escolha o formato, cor, texto e posicionamento do seu carimbo."
                  />
                </ListItem>
                <Divider component="li" variant="inset" />

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      3
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h6">Baixe ou compartilhe</Typography>
                    }
                    secondary="Baixe a imagem com o carimbo em alta resolução ou compartilhe o seu carimbo para que outras pessoas possam usar."
                  />
                </ListItem>
              </List>

              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                href="/stamp"
                sx={{ mt: 4 }}
              >
                Experimentar agora
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "medium" }}
        >
          Por que usar nosso gerador de selos?
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                color="primary"
              >
                Para Uso Pessoal
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Crie seus próprios selos para redes sociais" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Engaje seus seguidores a entrarem na onda" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Compartilhe seu modelo para seus amigos usarem" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                color="primary"
              >
                Para Uso Profissional
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Personalize seuas fotos com a sua marca" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Compartilhe o seu modelo para seus seguires e clientes usarem" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Crie campanhas a partir do uso do seu selo" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "secondary.main",
          color: "secondary.contrastText",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Pronto para criar seus carimbos personalizados?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Comece agora mesmo, totalmente grátis e sem necessidade de cadastro!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/stamp"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              fontSize: "1.1rem",
            }}
          >
            Criar meu selo
          </Button>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "medium" }}
        >
          Perguntas Frequentes
        </Typography>

        <Box>
          <Paper elevation={1} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              O serviço é realmente gratuito?
            </Typography>
            <Typography>
              Sim, o nosso gerador de selos é completamente gratuito para uso.
              Não há custos ocultos ou limitaçõesa.
            </Typography>
          </Paper>

          <Paper elevation={1} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quais formatos de imagem são suportados?
            </Typography>
            <Typography>
              Nosso gerador suporta os formatos mais comuns, incluindo JPG, PNG,
              GIF e SVG.
            </Typography>
          </Paper>

          <Paper elevation={1} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Posso usar os selos para fins comerciais?
            </Typography>
            <Typography>
              Sim, os selos que você cria são de sua propriedade e podem ser
              usados para qualquer finalidade, incluindo projetos comerciais.
            </Typography>
          </Paper>

          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Preciso criar uma conta para usar o serviço?
            </Typography>
            <Typography>
              Não, não é necessário criar uma conta, mas caso você queira
              compartilhar o seu selo para outros usuários usarem, precisa
              gardar bem o link gerado pois não será possivel recuperá-lo.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

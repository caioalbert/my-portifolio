import {Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {// <= mobile
      paddingTop: "100px"
    },
    [theme.breakpoints.up('md')]: {// >= mobile
      paddingTop: "0",
    }
  }));
  const StyledImage = styled("img")(({theme}) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText} `
  }));

  const handleDownloadCV = () => {
    // URL do arquivo a ser baixado
    const fileUrl = '/curriculo.pdf';
    // Criando um link temporário
    const link = document.createElement('a');
    link.href = fileUrl;
    // Definindo o nome do arquivo
    link.setAttribute('download', 'curriculum-caio.pdf');
    // Adicionando o link ao corpo do documento
    document.body.appendChild(link);
    // Simulando um clique no link para iniciar o download
    link.click();
    // Removendo o link do corpo do documento
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    window.location.href = 'mailto:caioalberto2104@gmail.com';
  };

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground/>
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImage src={Avatar} alt="foto-de-caio" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} >Caio alberto</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I' am a Software Engineer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={2}>
                <Grid item  xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleDownloadCV}>   
                  <DownloadIcon/>
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleContactMe}>
                    <MailOutlineIcon/>
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
              
              
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;

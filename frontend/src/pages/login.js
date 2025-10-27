import { useState, useEffect } from 'react';
import PersonalizedHeader from '@/components/PersonalizedHeader';
import { Box, Grid, Paper, TextField, Button, Link, Typography } from '@mui/material';
import Polaroid from '@/components/Polaroid';

export default function LoginPage() {
  const [polaroids, setPolaroids] = useState([]);

  useEffect(() => {
    const newPolaroids = [
      {
        id: 1,
        imageUrl: `/randomImages/04.jpg`,
        rotation: Math.random() * 15 - 10,
        sx: { top: '15%', left: '10%' },
      },
      {
        id: 2,
        imageUrl: `/randomImages/05.jpg`,
        rotation: Math.random() * 15 - 5,
        sx: { top: '40%', right: '5%' },
      },
      {
        id: 3,
        imageUrl: `/randomImages/06.jpg`,
        rotation: Math.random() * 20 - 10,
        sx: { bottom: '10%', left: '20%' },
      },
    ];
    setPolaroids(newPolaroids);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PersonalizedHeader loggedIn={false} />
      <Grid container component="main" sx={{ flexGrow: 1 }}>

        <Grid
          item
          size={6}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            display: { xs: 'none', md: 'block' },
            backgroundcolor: 'red'
          }}
        >
          {polaroids.map((p) => (
            <Polaroid key={p.id} {...p} />
          ))}
        </Grid>

        <Grid item size={{xs: 12, md: 6}} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              maxWidth: '400px',
              backgroundColor: 'background.paper',
              borderRadius: '12px',
            }}
          >
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                // Cor do texto do input
                '& .MuiInputBase-input': { color: 'text.primary' },
                // Cor do label
                '& label.Mui-focused': { color: 'text.primary' },
                '& .MuiInputLabel-root': { color: 'text.primary' },
                // Cor da borda
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'text.primary' },
                  '&:hover fieldset': { borderColor: 'text.primary' },
                  '&.Mui-focused fieldset': { borderColor: 'text.primary' },
                },
              }}
            />
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                // Cor do texto do input
                '& .MuiInputBase-input': { color: 'text.primary' },
                // Cor do label
                '& label.Mui-focused': { color: 'text.primary' },
                '& .MuiInputLabel-root': { color: 'text.primary' },
                // Cor da borda
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'text.primary' },
                  '&:hover fieldset': { borderColor: 'text.primary' },
                  '&.Mui-focused fieldset': { borderColor: 'text.primary' },
                },
              }}
            />
            <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
              Entrar
            </Button>
            <Link href="/cadastrar" color="text.primary" sx={{ alignSelf: 'center', mt: 1 }}>
              Não tenho uma conta
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

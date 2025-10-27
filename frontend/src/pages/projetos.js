import PersonalizedHeader from '@/components/PersonalizedHeader';
import { Box, Button, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const mockProjects = [
  {
    id: 1,
    name: 'Retrato de Verão',
    imageUrl: '/randomImages/01.jpg',
    lastEdited: '2 dias atrás',
  },
  {
    id: 2,
    name: 'Paisagem Urbana Noturna',
    imageUrl: '/randomImages/02.jpg',
    lastEdited: '5 dias atrás',
  },
  {
    id: 3,
    name: 'Ensaio de Produto',
    imageUrl: '/randomImages/03.jpg',
    lastEdited: '1 semana atrás',
  },
  {
    id: 4,
    name: 'Casamento na Praia',
    imageUrl: '/randomImages/04.jpg',
    lastEdited: '2 semanas atrás',
  },
  {
    id: 5,
    name: 'Festa de Aniversário',
    imageUrl: '/randomImages/05.jpg',
    lastEdited: '1 mês atrás',
  },
];

export default function ProjectsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PersonalizedHeader loggedIn={true} />
      <Container component="main" maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1">
            Meus Projetos
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            href='/editor'
          >
            Criar novo projeto
          </Button>
        </Box>

        <Grid container spacing={4}>
          {mockProjects.map((project) => (
            <Grid item key={project.id}  size={{xs: 12, sm:6, md: 4}} sx={{ display: 'flex' }}>
              <Card 
                sx={{ 
                  backgroundColor: 'background.paper', 
                  width: { xs: '70%' , sm: '100%'},
                  display: 'flex',
                  margin: 'auto',
                  flexDirection: 'column'
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={project.imageUrl}
                    alt={`Imagem do projeto ${project.name}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" noWrap>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Última edição: {project.lastEdited}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

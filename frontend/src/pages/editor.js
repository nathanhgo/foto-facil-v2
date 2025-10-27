import { useState } from 'react';
import { Box, Menu, MenuItem, Button, Slider, Input, Typography } from '@mui/material';
import PersonalizedHeader from '@/components/PersonalizedHeader';
import EditorSidebar from '@/components/EditorSidebar';

// Ícones para as ferramentas
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CropIcon from '@mui/icons-material/CropRotate';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FaceIcon from '@mui/icons-material/Face';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SaveIcon from '@mui/icons-material/Save';

const tools = [
  { name: 'Upload de Imagem', icon: <FileUploadIcon /> },
  { name: 'Recortar', icon: <CropIcon /> },
  { name: 'Filtros', icon: <AutoAwesomeIcon /> },
  { name: 'Detecção de Rosto', icon: <FaceIcon /> },
  { name: 'Edição em Massa', icon: <PhotoLibraryIcon /> },
  { name: 'Salvar', icon: <SaveIcon /> },
];

const renderMenuContent = (toolName) => {
  switch (toolName) {
    case 'Upload de Imagem':
      return (
        <MenuItem>
          <Button component="label" fullWidth color='text.primary'>
            Selecionar Arquivo
            <input type="file" hidden />
          </Button>
        </MenuItem>
      );
    case 'Recortar':
      return ['Post do Instagram', 'Facebook', 'LinkedIn', 'Livre'].map(option => (
        <MenuItem key={option} color='text.primary'>{option}</MenuItem>
      ));
    case 'Filtros':
      return (
        <Box sx={{ p: 2, width: 200 }}>
          <Typography gutterBottom color='text.primary'>Cor do Filtro</Typography>
          <Input type="color" defaultValue="#841F9D" sx={{ mb: 2, width: '100%' }} />
          <Typography gutterBottom color='text.primary'>Intensidade</Typography>
          <Slider defaultValue={50} aria-label="Intensidade" valueLabelDisplay="auto" />
        </Box>
      );
    case 'Detecção de Rosto':
      return ['Detectar Manualmente', 'Via IA'].map(option => (
        <MenuItem key={option}>{option}</MenuItem>
      ));
    case 'Edição em Massa':
      return (
        <MenuItem>
          <Button component="label" fullWidth color='text.primary'>
            Selecionar Pasta
            {/* @ts-ignore */}
            <input type="file" webkitdirectory="" hidden />
          </Button>
        </MenuItem>
      );
    default:
      return null;
  }
};

export default function EditorPage() {
  const [menuState, setMenuState] = useState({ anchorEl: null, toolName: null });

  const handleToolClick = (event, toolName) => {
    if (toolName === 'Salvar') {
      // Ação de salvar (não abre menu)
      console.log('Salvando...');
      return;
    }
    setMenuState({
      anchorEl: event.currentTarget,
      toolName: toolName,
    });
  };

  const handleMenuClose = () => {
    setMenuState({ anchorEl: null, toolName: null });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <PersonalizedHeader loggedIn={true} />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <EditorSidebar tools={tools} onToolClick={handleToolClick} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box 
            sx={{
              backgroundColor: 'secondary.main',
              p: 1,
              borderRadius: 2,
              boxShadow: 3,
              maxWidth: '700px',
            }}
          >
            <Box
              component="img"
              src="/randomImages/01.jpg"
              alt="Imagem para edição"
              sx={{
                display: 'block',
                borderRadius: 1,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
        <Menu
          anchorEl={menuState.anchorEl}
          open={Boolean(menuState.anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          slotProps={{
            paper: {
              sx: {
                ml: 1.5, // Margem para não sobrepor o ícone
              },
            },
          }}
        >
          {renderMenuContent(menuState.toolName)}
        </Menu>
      </Box>
    </Box>
  );
}

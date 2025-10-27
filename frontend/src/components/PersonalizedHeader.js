import { useState, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem, Container, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '@/contexts/ThemeContext';
import Link from 'next/link';

export default function PersonalizedHeader({loggedIn}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { toggleTheme, themeMode } = useContext(ThemeContext);

  return (
    <AppBar 
      position="static" 
      sx={{ 
        minHeight: '8vh',
        backgroundColor: 'primary.main',
      }}>

      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '8vh' }}>

        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="h1">
            FotoFácil
          </Typography>
        </Link>

        { loggedIn ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Toolbar disableGutters>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"          
                aria-controls={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: 'background.paper',
                        color: 'secondary.main',
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link href="/projetos" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Meus projetos
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Sair</MenuItem>
                  <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
                    {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Menu>
            </Toolbar>
          </Box>
          ) : (
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          )
        }
      </Container>
    </AppBar>
  )
}
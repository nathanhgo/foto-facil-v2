import { Box, List, ListItem, IconButton, Tooltip } from '@mui/material';

export default function EditorSidebar({ tools, onToolClick }) {
  return (
    <Box
      sx={{
        width: '80px',
        height: 'calc(100vh - 8vh)', // Altura da tela menos a altura do header
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
      }}
    >
      <List>
        {tools.map((tool) => (
          <ListItem key={tool.name} sx={{ justifyContent: 'center', p: 0, my: 1 }}>
            <Tooltip title={tool.name} placement="right">
              <IconButton
                onClick={(event) => onToolClick(event, tool.name)}
                sx={{
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '50%',
                  p: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {tool.icon}
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
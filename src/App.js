import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: 'none', height: '100vh' }}>
          <Typography variant="h2" align="center">
            CRA with MUI boilerplate
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;

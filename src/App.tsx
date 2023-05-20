// import './App.css';
import { styled, createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme, darkTheme } from './config/theme';
import { useColorMode } from './hooks/useColorMode';
import { Button } from './components/button/Button';
import { Box } from './components/box/Box';
const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  padding: 1rem;
`;
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
  box-sizing: border-box;
  }
  body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{
  margin: 0;
  }
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
function App() {
  const [themeMode, toggleThemeMode] = useColorMode();

  return (
    <ThemeProvider theme={themeMode === 'light' ? theme : darkTheme}>
      <GlobalStyle />
      <AppContainer>
        <Button onClick={toggleThemeMode}>Toggle Theme</Button>
        <Box
          className='App-header'
          background='red'
          color='blue'
          width='500px'
          height='500px'
          borderRadius='50%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Box>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

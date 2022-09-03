import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Navbar from './components/Navbar';
import GlobalStyles from './styles/global';

import DefaultTheme from './styles/theme/default';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <Navbar />
    </ThemeProvider>
  )
}

export default App;
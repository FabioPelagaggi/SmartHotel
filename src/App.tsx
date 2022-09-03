import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar'

import defaultTheme from './src/assets/styles/theme'

function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <Navbar />
    </ThemeProvider>
  )
}

export default App

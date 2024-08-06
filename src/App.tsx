import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './context/GithubContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <GithubProvider>
          <Router />
        </GithubProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'
const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)
root.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>
)

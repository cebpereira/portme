import { StrictMode } from 'react'
import { MotionConfig } from 'motion/react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { LanguageProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>,
)

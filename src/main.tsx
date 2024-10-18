import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/latin-300.css';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-500.css';
import '@fontsource/roboto/latin-700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { createRoute, createRouter, redirect, RouterProvider } from '@tanstack/react-router';
import { rootRoute } from './pages/root.tsx';
import { naturalPersonRoute } from './pages/naturalPerson/index.tsx';
import { legalPersonRoute } from './pages/legalPerson/index.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({
      to: '/pessoa-fisica',
    })
  }
})

const routeTree = rootRoute.addChildren([indexRoute, naturalPersonRoute, legalPersonRoute])

const router = createRouter({ routeTree })


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)

import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider} from '@mui/material';


import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { darkTheme, lightTheme } from '@/themes';
import { UiProvider } from '@/context/ui';
import { EntriesProvider } from '@/context/entries';
import { SnackbarProvider } from 'notistack';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UiProvider>
          <ThemeProvider theme={ darkTheme }>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}

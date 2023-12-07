import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import  AuthScreen from '../src/pages/authScreen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>


      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AuthScreen />}/>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App;
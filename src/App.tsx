
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import AppRouts from './routs'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRouts />
    </BrowserRouter>
  )
}

export default App
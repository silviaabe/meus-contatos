import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGLobal, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGLobal />
      <Container>
        <RouterProvider router={Rotas} />
      </Container>
    </Provider>
  )
}

export default App

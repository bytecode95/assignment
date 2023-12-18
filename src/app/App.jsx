import { Header, ProductDetails } from '../components/index';
import Home from '../pages/Home';
import { ContextProvider } from '../context/ContextProvider';
import './App.css'
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <ContextProvider>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path={'/productdetail/:id'} element={<ProductDetails/>}/>
          </Routes>
        </Container>
      </ContextProvider>
    </>
  )
}

export default App

import { Header} from '../components/index';
import {Home, ProductDetail} from '../pages/index';
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
            <Route path={'/productdetail/:id'} element={<ProductDetail/>}/>
          </Routes>
        </Container>
      </ContextProvider>
    </>
  )
}

export default App

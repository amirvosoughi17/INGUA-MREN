import { BrowserRouter  , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import { Navbar } from './components/navbar/Navbar';

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addblog' element={<AddBlog />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { PastaSRC } from '../pages/PastaSRC';


export default function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/PastaSRC' element={<PastaSRC/>} />
        </Routes>
        
      
      </BrowserRouter>
    </>
  )
}
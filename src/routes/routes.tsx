import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Base from '../pages/Base';
import { Home } from '../pages/Home';
import { PastaSRC } from '../pages/PastaSRC';


export default function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base/>}>
            <Route index element={<Home/>} />
            <Route path='/PastaSRC' element={<PastaSRC/>} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}
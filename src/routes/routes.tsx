import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Base from '../pages/Base';
import { Home } from '../pages/Home';
import { PastaSRC } from '../pages/PastaSRC';
import { PastaComponents } from '../pages/PastaComponents';
import { PastaStore } from '../pages/PastaStore';
import { PastaPages } from '../pages/PastaPages';


export default function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Documentacao-PortalNoivas/' element={<Base/>}>
            <Route index element={<Home/>} />
            <Route path='/Documentacao-PortalNoivas/PastaSRC' element={<PastaSRC/>} />
            <Route path='/Documentacao-PortalNoivas/PastaComponents' element={<PastaComponents/>} />
            <Route path='/Documentacao-PortalNoivas/PastaPages' element={<PastaPages/>} />
            <Route path='/Documentacao-PortalNoivas/PastaStore' element={<PastaStore/>} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}
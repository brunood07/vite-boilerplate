import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import { Nav } from 'react-bootstrap';
import RootLayout from './components/RootLayout';
import { DataProvider } from './DataContext';
import { useEffect } from 'react';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <Nav></Nav>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;

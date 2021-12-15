import React, { useContext } from 'react';
// import { ProductsContextProvider, ProductsContext } from './context-provider/product.context'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Import Routes
import SavedRoute from './routes/saved.route';
import ProductsRoute from './routes/products.route';
import ContactRoute from './routes/contact.route';

const App = () => {
  // const { Products } = useContext(ProductsContext)
  return (
    // <ProductsContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/products" element={<ProductsRoute/>}/>
          <Route exact path="/saved" element={<SavedRoute/>}/>
          <Route exact path="/contact" element={<ContactRoute/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    // </ProductsContextProvider>
  );
};

export default App;
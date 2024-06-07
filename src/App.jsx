import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Product_form_page from './pages/product_form_page'
import Product_list_page from './pages/product_list_page'
import Stock_management_page from './pages/stock_management_page'





function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/add-product' element={<Product_form_page />} />
          <Route path='/product-list' element={<Product_list_page />} />
          <Route path='/stock-manage' element={<Stock_management_page />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
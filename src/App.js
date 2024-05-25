import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Landing from './components/Landing';
import ListPhone from './components/ListPhone';
import DetailsProduct from './components/DetailsProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import TestFetch from './components/TestFetch';
import TestAxios from './components/TestAxios';


function App() {
  return (
    <>
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/list' element={<ListPhone />} />
            <Route path='/details' element={<DetailsProduct />} />
            <Route path='/fetch' element={<TestFetch/>} />
            <Route path='/axios' element={<TestAxios/>} />


          </Routes>
        </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;

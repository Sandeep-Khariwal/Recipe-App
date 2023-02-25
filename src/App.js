import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router , Routes , Route} from"react-router-dom"
import Home from './components/Home';
import Details from './components/Details';
import Favourite from './components/Favourite';

import './App.scss';
import "./styles/items.scss"
import "./styles/details.scss"
import "./styles/favourite.scss"
import "./styles/favitems.scss"


function App() {

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const [product , setProduct] = useState([]);
  const [favourite,setFavourite] =useState([])

  useEffect(()=>{
    fetchAllProducts(url)
  },[url])

  const fetchAllProducts=async(url)=>{
    await axios.get(url).then((res)=> {setProduct(res.data.categories)})
  } 

  return (

    <>
    <Router>
      <Routes>
        <Route exact path='/Recipe-App' element={<Home product={product} favourite={favourite} />} />
        <Route exact path='/:id' element={<Details product={product}  />} />
        <Route exact path='/favourite' element={<Favourite product={product} favourite={favourite} setFavourite={setFavourite} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

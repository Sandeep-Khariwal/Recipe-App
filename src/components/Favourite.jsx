import React from 'react'
import { useNavigate } from 'react-router-dom';
import FavItems from './FavItems';

const Favourite = ({favourite,setFavourite}) => {

    const navigate = useNavigate()

    const removeFavourite = (id)=>{
      const data = favourite.filter((item)=> id !== item.idCategory)
      setFavourite(data)
    }

  return (
    <div className="App">
    <h1>Your Favourite Recipe</h1>
    <button onClick={()=>navigate("/Recipe-App")} >Home</button>
    <div className='showList'>
      {
        favourite.map((item)=>(
          <FavItems key={item.idCategory} Items={item} removeFavourite={removeFavourite} />
        ))
      }
      
    </div>
    </div>
  )
}

export default Favourite

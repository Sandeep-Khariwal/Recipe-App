import React from 'react';
import { Link} from 'react-router-dom';
const Items = ({Items,favourite}) => {

  const addFavourite = ()=>{
    alert("Item added to favourite")
    favourite.push(Items)
  }

  return (
    <div className='items'>
        <div className='img'>
            <img src={Items.strCategoryThumb} alt="not"/>
        </div>
        <div className='info' >
        <h3>{Items.strCategory}</h3>
        <div className='buttons' >
        <Link to={`/${Items.idCategory}`} >View Details</Link>
        <button onClick={addFavourite} >Favourite</button>
        </div>
        </div>
      
    </div>
  )
}

export default Items

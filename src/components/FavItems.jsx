import React from 'react'

const FavItems = ({Items,removeFavourite}) => {

  const id = Items.idCategory

  return (
    <div className='items'>
        <div className='img'>
            <img src={Items.strCategoryThumb} alt="not"/>
        </div>
        <div className='info' >
        <h3>{Items.strCategory}</h3>
        <button onClick={()=>removeFavourite(id)} >Remove Favourite</button>
        </div>
      
    </div>
  )
}

export default FavItems

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const defaultvalue = {
  strCategory:"",
  strCategoryThumb:"",
  strCategoryDescription:""
  
}

const Details = ({product}) => {

const {id} = useParams()

const [recipe,setRecipe] = useState(defaultvalue)

  useEffect(()=>{
      const data = product.filter(item => id === item.idCategory)
      setRecipe({...data[0]})
  },[product])


  return (
    <div className='details'>
      <div className='container' >
       <div className='img' >
         <img src={recipe.strCategoryThumb} alt='not' />
       </div>
       <div className='info' >
        <h1>Fresh Recipes</h1>
        <h3>Category : {recipe.strCategory}</h3>
        <p>Description: <br/> <span>{recipe.strCategoryDescription}</span></p>
       </div>
      </div>
    </div>
  )
}

export default Details

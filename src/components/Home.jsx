import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Items from './Items';

const Home = ({product,favourite}) => {

  const [text , setText] = useState("")
  const navigate = useNavigate()

  return (
    
    <div className="App">
    <h1>Your Recipe Category</h1>
    <button onClick={()=>navigate("/favourite")} >Your Favourite</button>
    <input type="text" name='name' placeholder='Search: e.g Beef' onChange={(e)=>setText(e.target.value)}/>
    <div className='showList'>
      {
        product.filter((user) => user.strCategory.toLowerCase().includes(text)).map((item)=>(
          <Items key={item.idCategory} Items={item} favourite={favourite} />
        ))
      }
      
    </div>
    </div>
  )
}

export default Home

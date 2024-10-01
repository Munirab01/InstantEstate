import { useState } from 'react';
import './searchBar.scss'

const types = ["buy" , 'rent']

function SearchBar(){
    const[query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    })

    const switchType = (val)=>{
        setQuery((prev)=>({ ...prev , type:val}));

    };

  return (
    <div className='searchBar'>
    <div className='type'>
        {types.map((type)=>(
          <button key={type} onClick={()=>switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
        ))}
    </div>
        <form>
        <input type="text" name='location' placeholder='City Location'/>
        <input type="text" name='number' min={0} max={100000} placeholder='Min Price'/>
        <input type="text" name='number' min={0} max={100000} placeholder='Max Price'/>
        <button>
            <img alt="" src="/search.png"/>
        </button>
    </form>
    </div>
  )
}

export default SearchBar;
import './filter.scss'

function Filter(){
  return (
    <div className='filter'>
      <h1>Search Results for <b>Mumbai</b></h1>
      <div className='top'></div>
      <div className='item'>
        <label htmlFor="city">Location</label>
        <input type='text' id="city" name='city' placeholder='City Location'></input>
      </div>
      <div className='bottom'>
      <div className='item'>
        <label htmlFor="type">Type</label>
        <select name="type" id="type">
        <option value="Any">Any</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
        </select>
      </div>
      <div className='item'>
        <label htmlFor="property">Property</label>
        <select name="property" id="property">
        <option value="Any">Any</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Condo">Condo</option>
        <option value="Land">Land</option>
        </select>
      </div>
      <div className='item'>
        <label htmlFor="minPrice">Min Price</label>
        <input type='number' id="minPrice" name='minPrice' placeholder='any'></input>
      </div>
      <div className='item'>
        <label htmlFor="maxPrice">Max Price</label>
        <input type='number' id="maxPrice" name='maxPrice' placeholder='any'></input>
      </div>
      <div className='item'>
        <label htmlFor="bedroom">Bedroom</label>
        <input type='text' id="bedroom" name='bedroom' placeholder='any'></input>
      </div>
      <button>
      <img src="/search.png" alt="" />
      </button>
      </div>
    </div>
  )
}

export default Filter;
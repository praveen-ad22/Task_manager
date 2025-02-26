
import './Search.css'

function Search({searchinput,setsearchinput}) {
  return (
    <form className="searchbox" onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="search"> Search</label>
      <input
        type="text"
        name="search"
        id='search'
        className="search"
        placeholder='Search Items'
        value={searchinput}
        onChange={(e) => {
         setsearchinput(e.target.value)
        }}
      />
    </form>
  )
}
export default Search;

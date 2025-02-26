

import AddItem from './AddItem';
import './Content.css'
import Itemlist from './Itemlist';
import Search from './Search';
function Content({items,handleChange,handleDelete,handleSubmit,setinput,input,searchinput,setsearchinput}){

    return (
      <main>
        <AddItem
          handleSubmit={handleSubmit}
          input={input}
          setinput={setinput}
        />
        <Search
          searchinput={searchinput}
          setsearchinput={setsearchinput}
        />
        {items.length ? (
          <Itemlist
            items={items}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ) : (
          <p>The list is empty</p>
        )}
      </main>
    )
}
export default Content;
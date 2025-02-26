import {FaPlus} from 'react-icons/fa'
import './AddItem.css'
import { useRef } from 'react'


function AddItem({handleSubmit,input,setinput}){
  const inputref=useRef()
    return (
      <div>
        <form className="container" onSubmit={handleSubmit}>
          <label htmlFor="item">Add Item</label>
          <input
            type="text"
            autoFocus
            ref={inputref}
            id="item"
            name="work"
            className="text"
            value={input}
            placeholder="Add item"
            onChange={(e) => {
              setinput(e.target.value)
            }}
            required
          />

          <button type="submit" className="bt"
           onClick={()=>inputref.current.focus()
          }
          >
            <FaPlus  />
          </button>
        </form>
      </div>
    )
     
}
export default AddItem
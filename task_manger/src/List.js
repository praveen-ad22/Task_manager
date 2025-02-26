import { FaTrash } from 'react-icons/fa'
function List({item,handleChange,handleDelete}) {
  return (
    <li className="ls-it" >
      <input
        type="checkbox"
        onChange={() => {
          handleChange(item.taskid,item.clicked)
        }}
        checked={item.clicked}
      />
      <label
        style={item.clicked? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => {
          handleChange(item.taskid,item.clicked)
        }}
      >
        {item.work}
      </label>
      <FaTrash
        role="button"
        className="icon"
        onClick={() => handleDelete(item.taskid)}
      />
    </li>
  )
}
export default List


import List from './List'
function Itemlist({items,handleChange,handleDelete}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <List key={item.taskid}
          item={item}
          handleChange={handleChange}
          handleDelete={handleDelete} />
        )
      })}
    </ul>
  )
}

export default Itemlist

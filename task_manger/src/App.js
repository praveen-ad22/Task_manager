
import  Header  from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'

import { useState , useEffect} from 'react'
function App() {
   const [searchinput,setsearchinput]=useState("")
   const [items, setItems] = useState([])
   const [input, setinput] = useState("")
   const fetchdata = async () => {
     try {
       const response = await fetch('http://localhost:5000/tasks')
       const data = await response.json()
       setItems(data)
     } catch (error) {
       console.log(error)
     }
   }
   async function addtask () {
    const newtask={
      work:input
    }
    try {
      const response = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newtask)
    })
    if(response.ok){
      fetchdata()
    setinput('')
    }
     
    } catch (error) {
      
    }
  } 
   async function handleChange(id,clicked) {
    console.log(clicked)
    const newtask={clicked:!clicked}
    console.log(newtask)
   try {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newtask),
    })
    const data =await response.json()
    console.log(data.message)
    if(response.ok){
      fetchdata()
    }
   } catch (error) {
    console.log(error)
   }
   }
   async function handleDelete(id) {
   try {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
     const data = await response.json() // Get the response data
     console.log(data.message) 
      if (response.ok) {
        fetchdata()
      }
   } catch (error) {
    
   }
   }
   async function searchdata(){
    try {
      const response = await fetch(`http://localhost:5000/tasks/query?search=${searchinput}`,{
        method:'GET'
      })
      const data=await response.json()
      if(response.ok){
        setItems(data)
      }
    } catch (error) {
      
    }
   }
function handleSubmit(event){
event.preventDefault()
  if(!input) return
  addtask()

}

useEffect(()=>{

fetchdata()
},[])
useEffect(()=>{
  searchdata();
},[searchinput])
  return (
    <div className='App'>
      <Header />
      <Content items={items}
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      input={input}
      searchinput={searchinput}
      setsearchinput={setsearchinput}
      setinput={setinput}
      />
      <Footer 
      length={items.length}
      />
    </div>
  )
}

export default App

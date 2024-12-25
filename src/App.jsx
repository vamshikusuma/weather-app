import { useState } from 'react'
import axios from 'axios'
import "./index.css"

function App() {
  const [city, setCity] = useState('')
  const [temperature,setTemperature]=useState('')

  const fetchData =()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then((response)=>setTemperature('Temperature at '+city+ " " +Math.round(response.data.main.temp-273)+'°C'))
  }
  
  return (
    <>
     <div>

 <center className='bg-slate-400 m-3 ml-72 mr-72  rounded-xl h-96 p-5'>

 <form className='m-0'>

<br /> 
         <h2 className='text-3xl font-semibold'>Weather App</h2> <br />
        <input type="text" className='rounded-md font-semibold' onChange={e=>setCity(e.target.value)} value={city}/><br /> <br />
        <input type='submit' className='bg-blue-700 font-semibold rounded-2xl p-2' onClick={(e)=>{
          e.preventDefault()
            fetchData()
            setTemperature('')
        }}/>
             </form>
            <br /> 
            {temperature && <div className='bg-slate-300 rounded-xl p-5'>
            <h2 className='text-3xl font-semibold'>{temperature}</h2> 
            </div>
      }
           
  
 </center>
     
     </div>
    </>
  )
}

export default App

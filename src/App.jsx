import {useEffect, useState} from 'react';
import './App.css';
import Items from './Item'

function App() {
  const [data,setData] = useState([])
  useEffect(()=> {
    console.log('Mounted')

    fetch("vinyl-1xp7szc4q-jasmines-projects-18d884ad.vercel.app")
    .then((response) => response.json())
    .then((data)=> setData(data));
  }, [])

  useEffect(()=> {
    console.log({data}), [data]
  })
  return (
  <>
 <Items data={data}/>  
 </>
  )
}

export default App
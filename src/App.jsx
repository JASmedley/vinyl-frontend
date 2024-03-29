import {useEffect, useState} from 'react';
import './App.css';
import Items from './Item'

function App() {
  const [data,setData] = useState([])
  useEffect(()=> {
    console.log('Mounted')

    fetch("https://vercel.com/jasmines-projects-18d884ad/recipe-app-backend/9AvZGmhm7qDLvQXGbuSGuEng8mQ6")
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
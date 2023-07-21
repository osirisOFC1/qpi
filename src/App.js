import './App.css';
import axios from 'axios';
import {useEffect , useState} from 'react';
import UserCard from './UserCard';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( res => setData(res.data))
    .catch((err)=>console.log(err))
  },[])
  console.log('hethi data',data)
  return (
    <div className="App">
      <h1>
        {data.map((e)=> <UserCard key={e .id} user={e}/>  )}
      </h1>
      
    </div>
  );
}

export default App;

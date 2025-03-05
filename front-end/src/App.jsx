import { useEffect, useState } from 'react'
import Header from './layouts/Header';
function App() {
  const [users, setUsers] = useState([]);

  return (
    <div  className='font-bold text-blue-400'>
      <Header/>
        
  
    </div>
  )
}

export default App

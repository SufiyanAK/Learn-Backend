import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [techFramwork, setTechFramwork] = useState([])

  const getData = async () => {
    axios.get
  }

  useEffect(() => {
    axios.get('http://localhost:3010/api/framwork')
      .then((res) => {
        setTechFramwork(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <section>
        <h1>Connecting Frontend with Backend</h1>
        <h3>Data: {techFramwork.length}</h3>
        {
          techFramwork && techFramwork.length > 0 ? (
            techFramwork.map((tech) => (
              <div key={tech.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <h4>{tech.name}:</h4>
                <p>{tech.category}</p>
              </div>
            ))
          ) : (
            <div>No data in response</div>
          )
        }
      </section>
    </>
  )
}

export default App

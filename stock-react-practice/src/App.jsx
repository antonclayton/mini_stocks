import './App.css'
import { fetchData } from './constants/api'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []) //occurs once on every reload of app.jsx


  return (
    <div className="stocks">
      {data ? (
        <div>{JSON.stringify(data, null, 2)}</div> // Display fetched data as JSON
      ) : (
        <div>No data available: {error}</div>
      )}
    </div>
  )
}

export default App

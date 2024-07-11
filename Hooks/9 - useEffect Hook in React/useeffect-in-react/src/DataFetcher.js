import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.techunsolved.com/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []); // Empty array means this effect runs only once, like
            // componentDidMount

    if (loading) {
        return <p>Loading...</p>
    }

  return (
    <div>
        <h1>Fetched Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DataFetcher;
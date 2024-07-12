import React from 'react'
import useFetch from './useFetch'

const DataDisplay = ({ url }) => {
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataDisplay;
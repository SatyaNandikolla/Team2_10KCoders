import { useEffect, useState } from "react";
import axios from "axios"

export const Cricket = () => {
    const [cricket, setCricket] = useState([])
    useEffect(() => {
        // let authObj={
        //     'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
        //     'X-RapidAPI-Key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
        //   }
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
        };
        let URL = "https://cricket-live-data.p.rapidapi.com/fixtures"
        axios.request(options).then(({ data }) => {
            console.log(data)
            setCricket(data.results)
        })

    }, [])
    const getSeries = () => {
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
        };
        axios.request(options).then(({ data }) => {
            console.log(data)
            setCricket(data.results)
        })
    }
    const getResults=()=>{
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/results',
            headers: {
              'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
              'X-RapidAPI-Key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
          axios.request(options).then(({ data }) => {
            console.log(data)
            setCricket(data.results)
        })
    }
    return (
        <div>
            <h2>API</h2>
            <button onClick={() => { getSeries() }}>Get Series</button>
            <button onClick={()=>{getResults()}}>Get Results</button>
            <ul>
                {cricket.map((cric) => {
                    return <li>{cric.match_title}</li>
                })}
            </ul>
        </div>
    )
}
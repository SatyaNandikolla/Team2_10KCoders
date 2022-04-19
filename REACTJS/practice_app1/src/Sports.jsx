import { useState } from "react"
import axios from "axios"

//rafc
export const Sports = () => {
    //Hook
    const [series, setSeries] = useState([])
    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
                'X-RapidAPI-Key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data.results);
            setSeries(response.data.results)
        })
        // .catch(function (error) {
        //     console.error(error);
        // });
    }
    return (
        <div>
            <button onClick={()=>{getData()}}>Get Data</button>
            <hr/>
            {series.map((info)=>{
                return<p>{info.type}</p>
            })}
        </div>
    )
}

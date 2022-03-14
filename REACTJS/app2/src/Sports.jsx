import axios from "axios";
import React, { useState } from "react"

//rafc
export const Sports=()=>{
    //hook for functional component
    const[series,setSeries]=useState([]);
    const getData=()=>{//option  object mottam ikkada paste chestam
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
          axios.request(options).then(function (response) {
            console.log(response.data.results);
            setSeries(response.data.results)
        })
    }
    return(
        <div>
            <button onClick={getData}>Get Data</button>
            <hr/>
            {series.map((Info)=>{
                return <p>{Info.type}</p>
            })}

        </div>
    )
};

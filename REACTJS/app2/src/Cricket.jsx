import React, { useEffect, useState } from "react";
import axios from "axios";
export const Cricket = () => {
    const [cricket, setCricket] = useState([]);
    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
        let URL = "https://cricket-live-data.p.rapidapi.com/fixtures";
        axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });
    }, [])
    const getSeries=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
          axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });
    }

    const getFixers=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
          axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });
    }

    const getFixersBySeries=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures-by-series/606',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
          axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });
    }
     
    const getFixersByDate=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2020-09-21',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
          axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });
    }
    const getResults=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/results',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
        axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });

    }
    const getResultsByDate=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
        axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });

    }
    const getMatchScorecard=()=>{
        var options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/match/2432999',
            headers: {
              'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
              'x-rapidapi-key': 'ec7340cee4msh961d3d880da35e7p146b83jsn53fe80858dee'
            }
          };
        axios.request(options).then(({ data }) => {
            console.log(data);
            setCricket(data.results);
        });

    }

    return (
        <div>
            <h1>API</h1>
            <button onClick={()=>{getSeries()}}>Get Series</button>
            <button onClick={()=>{getFixers()}}>Get Fixers</button>
            <button onClick={()=>{getFixersBySeries()}}>Fixtures By Series</button>
            <button onClick={()=>{getFixersByDate()}}>Fixtures By Date</button>
            <button onClick={()=>{getResults()}}>Results</button>
            <button onClick={()=>{getResultsByDate()}}>Results By Date</button>
            <button onClick={()=>{getMatchScorecard()}}>Match Scorecard</button>
            <ul>
                {cricket.map((cric)=>{
                    return<li>{cric.match_title}</li>
                })}
            </ul>
        </div>
    )
}
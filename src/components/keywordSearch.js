import React, { useState, useEffect} from "react";
import './keywordSearch.css'
import _ from 'lodash';

export default function KeywordSearch (){
  
  const [filmData, setFilmData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("")
  
  useEffect(() => {
    setLoading(true);
    fetch('https://program-1655722868153.azurewebsites.net/Home/allFilms')
    .then((res) => res.json())
    .then((data) => {
      setFilmData(data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);


  function loopArray(obj){
    
    for(let i in obj){
      
      return obj.map((film,index) => (
      <ul className="actorBox" key={index}>
        <li>{obj[index].first_name} {obj[index].last_name}</li>
        </ul>
        ))
      }
    }
    
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(filmData)) {
      return <p>There was an error loading your data!</p>;
    }

    return(
        <div id="page">
            <div id="searchBar">
                <h1>Search Bar</h1>
                <div className="userInput">
                    <input id="userInput" type="text" placeholder="Add a keyword..." onChange={event => setQuery(event.target.value)}/>
                </div>

            <div id="results">
            {
                filmData.filter(film => {
                    if(query ===''){
                        return film;
                    }
                    else if(film.title.toLowerCase().includes(query.toLowerCase())){
                        return film;
                    }
                    else if(film.description.toLowerCase().includes(query.toLowerCase())){
                        return film;
                    }
                    else if(film.length === parseInt(query)){
                      return film;
                    }
                    else if(film.rating.toLowerCase().includes(query.toLowerCase())){
                      return film;
                    }
                    else if(film.category[0].name.toLowerCase().includes(query.toLowerCase())){
                      return film;
                    }
                }).map((film, index) => (
                    <div className="box" key={index}>
                        <h2>{film.title}</h2>
                        <p>{film.description}</p>
                        <p>{film.release_year}</p>
                        <p id="lenRatingCategory">Film length:{film.length} Mins Rating:{film.rating} Category:{film.category[0].name}</p>
                        <p id="actorHeading">Notable actors:</p>
                        {loopArray(film.actor)}
                    </div>
                ))
            }
            </div>
            </div>
      </div>
      )

  }
import React, { useState, useEffect} from "react";
import './actorSearch.css'
import _ from 'lodash';

export default function ActorSearch (){
  
  const [actorData, setActorData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [query, setQuery] = useState("")
  
  useEffect(() => {
    setLoading(true);
    fetch('https://program-1655722868153.azurewebsites.net/Home/allActors')
    .then((res) => res.json())
    .then((data) => {
      setActorData(data);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);
    
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(actorData)) {
      return <p>There was an error loading your data!</p>;
    }

    return(
        <div id="page">
            <div id="searchBar">
                <h1>Search Bar</h1>
                <div className="userInput">
                    <input id="userInput" type="text" placeholder="New item..." onChange={event => setQuery(event.target.value)}/>
                    <button id="enter">Enter</button>
                </div>

            <div id="results">
            {
                actorData.filter(actor => {
                    if(query ===''){
                        return actor;
                    }
                    else if(actor.first_name.toLowerCase().includes(query.toLowerCase())){
                        return actor;
                    }
                    else if(actor.last_name.toLowerCase().includes(query.toLowerCase())){
                        return actor;
                    }
                }).map((actor, index) => (
                    <div className="actorBox" key={index}>
                        <p>{actor.first_name}</p>
                        <p>{actor.last_name}</p>
                    </div>
                ))
            }
            </div>
            </div>
      </div>
      )

  }
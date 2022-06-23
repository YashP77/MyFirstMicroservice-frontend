import React, { useState, useEffect} from "react";
import _ from 'lodash';

import './form.css'


export default function DeleteActor (){

    const [actorID,setActorID] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch(`https://program-1655722868153.azurewebsites.net/Home/deleteActor?id=${actorID}`, {
            method: "DELETE",
          });
          if (res.status === 204) {
            setMessage("Actor deleted successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div id="addActorform">
        <form onSubmit={handleSubmit}>
        <label>
            Actor ID:
            <input type="text" placeholder="Actor ID" onChange={(e) => setActorID(e.target.value)}/>
          </label>

          <button type="submit">Delete</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        </div>
      );

}
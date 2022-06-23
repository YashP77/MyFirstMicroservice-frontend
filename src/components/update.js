import React, { useState, useEffect} from "react";
import _ from 'lodash';

import './form.css'


export default function UpdateActor (){

    const [actorID,setActorID] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch(`https://program-1655722868153.azurewebsites.net/Home/updateActor?id=${actorID}&firstName=${firstName}&lastName=${lastName}`, {
            method: "PUT",
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setFirstName("");
            setLastName("");
            setMessage("Actor updated successfully");
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
          <label>
            First Name:
            <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
          </label>
          <label>
            Last Name:
            <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
          </label>

          <button type="submit">Update</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        </div>
      );

}
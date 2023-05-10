import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Planets = () => {
    const {id} = useParams();
    const [planets, setPlanets] = useState(null);


    useEffect(()=> {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response =>{
            setPlanets(response.data);
        })
        .catch(err=>{
            console.log("these are not the droids you are looking for.")
        })

    }, [id])
    return (
        <div>
            {
                planets ?
                    <div>
                        <h1>{planets.name}</h1>

                            <ul>
                                <li>Terrain: {planets.terrain}</li>
                                <li>Gravity: {planets.gravity}</li>
                                <li>Climate: {planets.climate}</li>
                                <li>Population: {planets.population}</li>
                            </ul>


                    </div> :
                    <div>
                        <h1>"These are not the droids you are looking for."</h1>
                        <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg" alt="not found"></img>
                    </div>
            }
        </div>
    )
}


export default Planets;

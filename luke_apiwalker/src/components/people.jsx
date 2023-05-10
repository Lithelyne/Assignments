import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {
    const { id } = useParams();
    const [people, setPeople] = useState(null);
    const [homeworld, setHomeworld] = useState(null);



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPeople(response.data);
                // fetch homeworld data
        axios.get(response.data.homeworld)
            .then(response => {
                setHomeworld(response.data);
                    })
                    .catch(err => {
                        console.log("Error fetching homeworld data:", err);
                    });
            })
            .catch(err => {
                console.log("Error fetching people data:", err);
            });

    }, [id]);


    return (
        <div>
            {
                people ?
                    <div>
                        <h1>{people.name}</h1>
                        <h3>
                            <ul>
                                <li>Height: {people.height}</li>
                                <li>Mass: {people.mass}</li>
                                <li>Hair Color: {people.hair_color}</li>
                                <li>Skin Color: {people.skin_color}</li>
                                {
                                    homeworld ?
                                        <li>Homeworld: {homeworld.name}</li>
                                        :
                                        null
                                }
                            </ul>
                        </h3>

                    </div> :
                        <div>
                        <h1>"These are not the droids you are looking for."</h1>
                        <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg" alt="not found"></img>
                    </div>
            }
        </div>
    )
}


export default People;

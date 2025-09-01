import React from "react"
import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Card from "../components/Card"
import { fetchData } from "../redux/action"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

export default function People() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData("https://swapi.info/api/people"));
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <section className="section-padding">
                <div className="container">
                    <Heading title="People" />

                    <div className="card-wrap">
                        {state.loading && <div>Loading...</div>}
                        {state.error && <div>Error: {state.error}</div>}
                        {state.allData && state.allData.map((people) => (
                            <Card key={people.url} data={{
                                title: people.name,
                                description: `A ${people.gender} of height ${people.height} cm and mass ${people.mass} kg, 
  with ${people.hair_color} hair, ${people.skin_color} skin, and ${people.eye_color} eyes.`,
                                director: people.birth_year, url: people.url
                            }} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
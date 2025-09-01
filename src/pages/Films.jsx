import React from "react"
import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Card from "../components/Card"
import {fetchData} from "../redux/action"
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react";

export default function Films() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData("https://swapi.info/api/films"));
    }, [dispatch]);


    return (
        <>
            <Navbar />
            <section className="section-padding">
                <div className="container">
                    <Heading title="Films" />

                    <div className="card-wrap">
                        {state.loading && <div>Loading...</div>}
                        {state.error && <div>Error: {state.error}</div>}
                        {state.allData && state.allData.map((film) => (
                            <Card key={film.url} data={{title: film.title,
                                description: film.opening_crawl,
                                director: film.director, url:film.url}} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
import { useEffect } from "react";
import Heading from "./Heading";
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../redux/action"
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function CardDetail() {
    const id = useParams().id;
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(`https://swapi.info/api/films/${id}`));
        // console.log(state);
    }, [dispatch])

    // console.log(state.data);

    return (
        <>
            <Navbar />
            <section className="section-padding">
                <div className="container">

                    {state.loading && <div>Loading...</div>}
                    {state.error && <div>Error: {state.error}</div>}
                    {state.detail &&
                        <div className="card-detail">
                            <Heading title={state.detail.title} />
                            <p>{state.detail.opening_crawl}</p>
                            <i>directed by - {state.detail.director}</i>
                            <h4>Producer - {state.detail.producer}</h4>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}
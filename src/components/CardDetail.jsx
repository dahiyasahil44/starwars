import { useEffect } from "react";
import Heading from "./Heading";
import {useSelector, useDispatch} from "react-redux"
import {fetchData} from "../redux/action"
import { useParams } from "react-router-dom";

export default function CardDetail() {
    const id = useParams().id;
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchData(`https://swapi.info/api/films/${id}`));
        // console.log(state);
    },[dispatch])

    console.log(state);

    return (
        <>
            <section className="section-padding">
                <div className="container">
                    <Heading title="Card Detail" />
                    <div className="card-detail">

                    </div>
                </div>
            </section>
        </>
    )
}
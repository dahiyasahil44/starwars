import React from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";

export default function Card({data}) {
    const navigate = useNavigate();
    const id = data.url.split("/").filter(Boolean).pop();
    // console.log(data);
    function handleClick() {
        
        navigate(`/detail/${id}`)
    }

    return (
        <> 
            <div className="card" onClick={()=>handleClick()}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <div className="card-info">{data.director}</div>
            </div>
        </>
    );
}
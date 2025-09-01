import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
    const navigate = useNavigate();

    const parts = data.url.split("/").filter(Boolean);
    const resource = parts[parts.length - 2];
    const id = parts[parts.length - 1];

    function handleClick() {
        if (resource === "films") {
            navigate(`/detail/${id}`);
        }
    }

    return (
        <div
            className={`card ${resource !== "films" ? "disabled" : ""}`}
            onClick={handleClick}
            style={{ cursor: resource === "films" ? "pointer" : "default" }}
        >
            <h4>{data.title || data.name}</h4>
            <p>{data.description}</p>
            <div className="card-info">{data.director || data.gender}</div>
        </div>
    );
}

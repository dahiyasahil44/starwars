import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import {filterData} from "../redux/action"
import { useCallback } from "react";

export default function Navbar() {
    
    const dispatch = useDispatch();

    // debounce implementation
    function debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    const handleSearch = useCallback(
        debounce((value) => {
            dispatch(filterData(value));
        }, 500),
        []
    );

    function searchData(e) {
        handleSearch(e.target.value);
    }

    return (
        <>
        <div className="navbar">
            <div className="logo">Star wars</div>
            <div className="search">
                <input type="text" placeholder="Search here.." onChange={searchData} />
            </div>
            <div className="links">
                <Link to="/">Films</Link>
                <Link to="/people">People</Link>
                <Link to="/planets">Planets</Link>
                <Link to="/species">Species</Link>
                <Link to="/starships">Starships</Link>
                <Link to="/vehicles">Vehicles</Link>
            </div>
        </div>
        </>
    )
}
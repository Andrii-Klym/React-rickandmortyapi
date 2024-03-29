import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import arrow from "../../images/arrow_back_24px.png"

const CardDetails = () => {
    let { id } = useParams();

    let [fetchedData, updateFetchedData] = useState([]);
    let { name, location, gender, image, status, species, created} = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
        })();
    }, [api]);

    return (
        <div className="container d-flex justify-content-center mb-5">
            <Link
                style={{ textDecoration: "none" }}
                to="/">
                    <div>
                        <button className="position-absolute top-0 start-0 fw-bold bg-transparent border-0">
                            <img src={arrow} alt="arrow" /> GO BACK</button>
                    </div>
            </Link>
        <div className="d-flex flex-column gap-3">
            <h1 className="text-center">Name: {name}</h1>

            <img className="img-fluid" src={image} alt="" />
            {(() => {
            if (status === "Dead") {
                return <div className="badge bg-danger fs-5">Status: {status}</div>;
            } else if (status === "Alive") {
                return <div className=" badge bg-success fs-5">Status: {status}</div>;
            } else {
                return <div className="badge bg-secondary fs-5">Status: {status}</div>;
            }
            })()}
            <div className="content">
            <div className="">
                <span className="fw-bold">Species: </span>
                {species}
            </div>
            <div className="">
                <span className="fw-bold">Gender : </span>
                {gender}
            </div>
            <div className="">
                <span className="fw-bold">Location: </span>
                {location?.name}
            </div>
            <div className="">
                <span className="fw-bold">Created: </span>
                {created}
            </div>
            </div>
        </div>
        </div>
    );
};

export default CardDetails;
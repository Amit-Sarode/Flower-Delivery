import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../assets/data.json'

function PrdtDetails() {
    const id = useParams();

    const navigate = useNavigate()
    const goback = () => {
        navigate(-1)
    }
    return (
        <>
            <button onClick={goback} >x</button>

        </>
    )
}

export default PrdtDetails;

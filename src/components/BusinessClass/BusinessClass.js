import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const BusinessClass = () => {
    const {id} = useParams();
    const [ticket, setTicket] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:3300/ticketInfo/${id}`)
        .then(res => res.json())
        .then(data =>console.log(data))
    }, [id])

    return (
        <div>
            <h2>This is BusinessClass:</h2>
        </div>
    );
};

export default BusinessClass;
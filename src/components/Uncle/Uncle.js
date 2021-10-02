import { useContext } from "react";
import React from 'react';
import { RingContext } from "../../App";


const Uncle = (props) => {
    const {house} = props;
    const ornaments =useContext(RingContext);
    return (
        <div>
            <h1>Uncle</h1>
            <p>House: {house}</p>
            <p>{ornaments}</p>
        </div>
    );
};

export default Uncle;
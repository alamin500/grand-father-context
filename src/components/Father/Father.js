import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house, ornaments} = props;
    return (
        <div>
            <h1>Father</h1>
            <p>House: {house}</p>
            <div style={{display: 'flex'}}>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            <Myself house={house} ornaments={ornaments}></Myself>
            </div>
        </div>
    );
};

export default Father;
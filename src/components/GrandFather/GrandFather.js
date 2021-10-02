import React from 'react';
import Aunty from '../../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house, ornaments } = props;
    return (
        <div>
            <h1>GrandFathgfer</h1>
            <h5>House: {house}</h5>
            <div style={{display: 'flex'}}>
            <Father house={house} ornaments= {ornaments}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default GrandFather;
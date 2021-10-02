import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const {house, ornaments} = props;
    return (
        <div>
           <h1>Myself

           </h1>
           <p>House: {house}</p>
           <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default Myself;
import React from 'react';
import './Tablo.css';
type TabloType = {
    num: number
}

function Tablo(props: TabloType) {

    return (
        <div className="Tablo">
            <h1 className={props.num === 5 ? 'maxNum' : " "}>{props.num}</h1>
        </div>
    );
}

export default Tablo;

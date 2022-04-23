import React from 'react';
import './Button.css';

type ButtonType = {
    num: number
    itCallBack: () => void
    itCallBack2: () => void
}

function Button(props: ButtonType) {
    const onClick = () => {
        props.itCallBack()
    }
    const onClick2 = () => {
        props.itCallBack2()
    }
    
    return (
        <div className="Button">
            <button
                disabled={props.num > 4 ? true : false}
                onClick={onClick} >increment
            </button>
            <button
                disabled={props.num !== 0 ? false : true}
                onClick={onClick2}>recetting
            </button>
        </div>
    );
}

export default Button;

import React from 'react';

type ButtonforFilterPropsType = {
    name: string
    callback: (filter: string) => void
}

const ButtonforFilter  = (props: ButtonforFilterPropsType) => {

    return (
        <div>
            <button onClick={()=>props.callback(props.name)}>{props.name}</button>
        </div>
    );
};

export default ButtonforFilter;
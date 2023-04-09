import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addmessage: (title: string) => void
}

 export const Fullinput = (props: FullInputPropsType) => {
     let[title, setTitle]=useState('')
     console.log(title)

     const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
         setTitle(event.currentTarget.value)
     }
     const onClickButtonHandler = () => {
       props.addmessage(title)
     }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};


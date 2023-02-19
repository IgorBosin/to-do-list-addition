import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;
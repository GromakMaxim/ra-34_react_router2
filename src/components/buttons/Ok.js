import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Ok(props) {
    const navigate = useNavigate();

    async function doAction() {
        let result = await props.func();
        navigate('/');

    }

    return (
        <button className='ok' onClick={doAction}>
            Ok
        </button>
    );
}

import React from "react";
import {useNavigate} from "react-router-dom";

export default function Delete(props) {
    const navigate = useNavigate();

    async function doAction() {
        let result = await props.func();
        navigate('/');

    }

    return (
        <button className='delete' onClick={doAction}>
            Delete
        </button>
    );
}

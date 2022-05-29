import React from "react";
import {useNavigate} from "react-router-dom";

export default function Cancel(props) {
    const navigate = useNavigate();

    return (
        <button className='cancel' onClick={() => navigate('/')}>
            Cancel
        </button>
    );
}

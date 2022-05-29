import React from "react";

export default function DetailsPage(props) {
    return (
        <div className='edit'>
            <div className="title">Редактирование поста</div>
            <textarea placeholder='начните писать здесь..'/>
            <div className='edit_controls'>
                <button className='cancel' onClick={()=> window.location.assign('/')}>Cancel</button>
                <button className='ok'>OK</button>
            </div>
        </div>
    );
}

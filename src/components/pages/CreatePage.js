import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export default function CreatePage(props) {
    const [txt, setTxt] = useState("");

    async function send() {
        let uuid = await uuidv4();
        let data = {
            id: uuid,
            content: txt
        }

        let response = await fetch('https://hooks2-api.herokuapp.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        let result = await response.json();
        window.location.assign('/');
        console.log(result)
    }

    return (
        <div className='create'>
            <div className='title'>Создание поста</div>
            <textarea placeholder='начните писать здесь..' onChange={
                () => setTxt(document.querySelector('.create > textarea').value)
            }/>
            <div className='create_controls'>
                <button className='cancel' onClick={()=> window.location.assign('/')}>Cancel</button>
                <button className='ok' onClick={send}>OK</button>
            </div>
        </div>
    );


}

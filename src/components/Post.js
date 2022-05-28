import React from "react";
import { format } from 'date-fns'

export default function Post(props) {
    let created = format(new Date(props.data.created), 'dd.MM.yyyy');
    return (
        <div className='post'>
            <div className="author_data">
                <div className="avatar"/>
                <div className="author_wrapper">
                    <div className="author_name">Gromak Maxim</div>
                    <div className="author_position">Junior</div>
                    <div className="created">{created}</div>
                </div>

            </div>


            <div className="content">{props.data.content}</div>

        </div>
    );
}

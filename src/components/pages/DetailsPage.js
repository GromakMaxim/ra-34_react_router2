import React, {Component} from "react";
import {useParams} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>;
}

class DetailsPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            receivedPost: null,
            id: this.props.params.id,
            txt: ''
        }
        this.loadNotesFromAPI = this.loadNotesFromAPI.bind(this);
        this.send = this.send.bind(this);
        this.setTxt = this.setTxt.bind(this);
    }

    componentDidMount() {
        this.loadNotesFromAPI();
    }

    async loadNotesFromAPI() {
        // fetch...
        let response = await fetch("https://hooks2-api.herokuapp.com/posts");
        if (response.ok) {
            let json = await response.json();
            let found = json.filter((item) => item.id === this.state.id)[0];
            if (found !== null && found !== undefined) {
                this.setState({
                    receivedPost: found
                })
            }

            return json;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    async send() {
        let data = {
            id: this.state.id,
            content: this.state.txt
        }

        let response = await fetch('https://hooks2-api.herokuapp.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        let result = await response.json();
        //window.location.assign('/');
        console.log(result)
    }

    async setTxt() {
        let newTxt = document.querySelector('.edit > textarea').value;
        console.log(newTxt)
        this.setState({
            txt: newTxt
        })
    }

    render() {
        let data = '';
        if (this.state.receivedPost !== null) {
            data = JSON.stringify(this.state.receivedPost.content);
        }
        return (
            <div className='edit'>
                <div className="title">Редактирование поста</div>
                <textarea
                    placeholder='начните писать здесь..'
                    defaultValue={data}
                    onChange={this.setTxt}/>
                <div className='edit_controls'>
                    <button className='cancel' onClick={() => window.location.assign('/')}>Cancel</button>
                    <button className='ok' onClick={this.send}>OK</button>
                </div>
            </div>
        );
    }
}


export default withParams(DetailsPage);

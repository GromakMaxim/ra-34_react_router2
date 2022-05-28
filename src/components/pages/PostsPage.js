import React, {Component} from "react";
import Post from "../Post";

export default class PostsPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            receivedPosts: null
        }
        this.loadNotesFromAPI = this.loadNotesFromAPI.bind(this);
    }


    componentDidMount() {
        this.loadNotesFromAPI();
    }


    render() {
        let posts = [];
        if (this.state.receivedPosts !== null) {
            this.state.receivedPosts.forEach(elem => {
                    posts.push(<Post key={elem.id} data={elem}/>)
                }
            )
        }
        return (
            <div className='posts'>
                {posts}
            </div>
        );
    }

    async loadNotesFromAPI() {
        // fetch...
        let response = await fetch("https://hooks2-api.herokuapp.com/posts");
        if (response.ok) {
            let json = await response.json();
            this.setState({
                receivedPosts: json
            })
            return json;
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }
}

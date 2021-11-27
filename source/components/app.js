import React, {useState, useEffect} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { fetchPosts } from './api/index'

const App = () => {
    const BASE_URL = 'https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT';

    const [posts, setPosts] = useState([]);

    useEffect( async () => {

        const thePosts = await fetchPosts();
        console.log('this is the posts var', thePosts);


    })

    return (
        <div>
            <div className="app-page-view">
                <p>PlaceHolder</p>
            </div>
        </div>
    )


}


export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC3HhBXJkHttX_k09ToGRP5432dWNjYA3s';

// Create a new component. This component should produce some html

//Take this component's generated HTML and put
//it on the page (in the DOM)

//const App = function(){
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};


ReactDOM.render(<App/>, document.querySelector('.container'));
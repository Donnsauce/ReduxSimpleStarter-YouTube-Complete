import React, {Component} from 'react';

//Use a class if you need state in your component. Otherwise use a base component
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    render(){
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    
    //prevents form from auto submitting when enter is pressed (we want to set our own instructions)
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
        <div className="ui segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label style={{fontSize: '1.6rem'}}>Image Search</label>
                    <input 
                        type="text" 
                        style={{fontSize: '1.6rem'}}
                        value={this.state.term} 
                        onChange={(e) => this.setState({term: e.target.value})} 
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;
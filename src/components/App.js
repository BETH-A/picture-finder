import React from  'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';
import Footer from './Footer';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term },
            
        });

        //helps identify what 'this' is
        console.log(this);

        this.setState({ images: response.data.results });
    }


    render () {
        return (
            <div className="ui container" style={{marginTop: '2rem'}}>  
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
                <Footer />
            </div>
            );

    }

    
}

export default App;
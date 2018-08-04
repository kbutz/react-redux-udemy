import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCvCqypUqat78R5mUwvXPety7lChH5dYq4';

// Downwards data flow - upper most parent component should handle data fetch
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // if key and property(the argument of the callback function above) are identical, you can pass only the property rather than key value pair
            this.setState({ 
                videos:videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} />
            </div>
        ); 
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
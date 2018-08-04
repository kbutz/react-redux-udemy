import React from 'react';

import VideoListItem from './video_list_item';

// The list component has no real need for state handling - a functional component works fine here
// A functional component's props object is passed as an argument. In a class based component, it is defined in the constructor accessible by this.props
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;
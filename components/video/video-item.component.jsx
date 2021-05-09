import React from 'react'

const VideoItem = () => (
    <video className="img-fluid card-img" poster="/image/video-player.svg">
        <source src="" type="video/mp4" />
        <source src="" type="video/ogg" />
    Your browser does not support the video tag.
    </video>
)
export default VideoItem;
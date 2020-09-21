//
//
import React from 'react';
import Post from './Post';

import TweetBox from './TweetBox';
import '../styles/Feed.scss';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
}

export default Feed;

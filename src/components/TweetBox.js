//
//

import React from 'react';

import { Avatar, Button } from '@material-ui/core';
import '../styles/TweetBox.scss';

import Biden_Harris_2020_Logo from '../images/Biden:Harris.jpg';

function Tweetbox() {
  return (
    <div className='tweetBox'>
      <form action=''>
        <div className='tweetBox__input'>
          <Avatar src={Biden_Harris_2020_Logo} />
          <input placeholder="What's Happening ?" type='text' />
        </div>
        <input
          className='tweetBox__imageInput'
          placeholder='Enter Image URL'
          type='text'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;

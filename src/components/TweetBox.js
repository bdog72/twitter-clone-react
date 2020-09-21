//
//

import React, { useState } from 'react';

import { Avatar, Button } from '@material-ui/core';
import '../styles/TweetBox.scss';

import Biden_Harris_2020_Logo from '../images/Biden:Harris.jpg';
import db from '../firebase';

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Dodo Boy',
      username: 'DOH',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://cdn.shopify.com/s/files/1/0012/5114/7851/products/2020-presidential-items-biden-harris-2020-presidential-campaign-pinback-button-jb-317-14726521651275_720x.png?v=1585157336',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form action=''>
        <div className='tweetBox__input'>
          <Avatar src={Biden_Harris_2020_Logo} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening ?"
            type='text'
          />
        </div>

        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox__imageInput'
          placeholder='Enter Image URL'
          type='text'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;

//
//

import React, { forwardRef } from 'react';

import '../styles/Post.scss';
import { Avatar } from '@material-ui/core';

// import Biden_Harris_2020_Logo from '../images/Biden:Harris.jpg';
import {
  ChatBubble,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className='post' ref={ref}>
        <div className='post__avatar'>
          <Avatar src={avatar} />
        </div>
        <div className='post__body'>
          <div className='post__header'>
            <div className='post__headerText'>
              <h3>
                {displayName}
                <span className='post__headerSpecial'>
                  {verified && <VerifiedUser className='post__badge' />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className='post__headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt='' />
          <div className='post__footer'>
            <ChatBubble fontSize='small' />
            <Repeat fontSize='small' />
            <FavoriteBorder fontSize='small' />
            <Publish fontSize='small' />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;

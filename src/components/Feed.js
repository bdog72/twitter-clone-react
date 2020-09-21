//
//
import React, { useEffect, useState } from 'react';
import Post from './Post';

import TweetBox from './TweetBox';
import '../styles/Feed.scss';

import db from '../firebase';
import FlipMove from 'react-flip-move';

// import Biden_Harris_2020_Logo from '../images/Biden:Harris.jpg';

function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setposts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

/* <Post
  displayName='Bozo'
  username='Bdog72'
  verified={true}
  text='It is working'
  avatar='https://cdn.shopify.com/s/files/1/0012/5114/7851/products/2020-presidential-items-biden-harris-2020-presidential-campaign-pinback-button-jb-317-14726521651275_720x.png?v=1585157336'
  image='https://cdn.shopify.com/s/files/1/0012/5114/7851/products/2020-presidential-items-biden-harris-2020-presidential-campaign-pinback-button-jb-317-14726521651275_720x.png?v=1585157336'
  // avatar={Biden_Harris_2020_Logo}
  // image={Biden_Harris_2020_Logo}
/> */

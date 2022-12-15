import React from 'react';
import Typical from 'react-typical';
import Particles from '../components/Particles';
import Content from '../components/Content';
import Meta from '../components/Meta';

import styles from './Home.module.css';
import colors from './Colors.module.css';

const Home: React.FC = () => {
  return (
    <Content>
      <Meta />
      <Particles particles={['0', '1']} />
      <div className={styles['center']}>
        <img src="photo.webp" alt="zero" className={styles['photo']} />
      </div>
      <div className={styles['center']}>
        <h1 className={styles['name']}>
          <br></br>

          <span className={colors['text-red']}>Zero</span>
          {''}
          <span className={colors['text-red']}>Sync</span>
        </h1>
      </div>
      <div className={styles['center']}>
        <p className={styles['description']}>
          <Typical
            steps={[
              1000,
              'Welcome to my portfolio!',
              1000,
              'I use Arch btw ;)',
              1000,
              'I want to be Full Stack Web Developer',
              1000,
              'I am an Open Sourcerer',
              1000,
              'I am a CS Student',
              1000,
              'Thank you for visiting!',
              1000,
              'I'm always open to suggestions.',
              1000,
            ]}
            loop={Infinity}
            wrapper="h3"
          />
          <br />
          Making Integrated WebApplications, Bots, Software! #OpenSource💖.
          <br></br>はじめまして!!
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
        </div>
        <div className={styles['center']}>
        <a href="https://discord.com/users/407130330710147073">
            <img src="https://lanyard-profile-readme.vercel.app/api/407130330710147073?idleMessage=%22May%20The%20Code%20Be%20With%20you%22&borderRadius=25px" alt="status" className={styles['status']} />
          </a>
      </div>
    </Content>
  );
};

export default Home;

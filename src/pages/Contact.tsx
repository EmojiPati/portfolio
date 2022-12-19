import React, { useState } from 'react';
import Content from '../components/Content';
import Meta from '../components/Meta';
import Particles from '../components/Particles';
import styles from './Contact.module.css';
import colors from './Colors.module.css';

interface CardProps {
  title: string;
  value: string;
  href?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [copied, setCopy] = useState(false);

  return (
    <a
      className={styles['card']}
      target={props.href ? '_blank' : '_self'}
      href={props.href ? props.href : '#'}
      onClick={() => {
        if (!props.href) {
          navigator.clipboard.writeText(props.value);
          setCopy(true);
        }
      }}
      onMouseLeave={() => setCopy(false)}
    >
      <h3>
        {props.title}{' '}
        <small className={colors['text-secondary']}>
          {copied ? 'Copied to clipboard' : props.value}
        </small>
      </h3>
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <Content>
      <Particles particles={['1', '0']} />
      <Meta
        title="Contact"
        description="Contact me for any questions, inquiries or just to say hi!"
      />
      <div className={styles['info']}>
        <h1 className={styles['title']}>
          Contact <br />
        </h1>{' '}
        <br />
        <small className={styles['description']}>
          Contact me for any questions, inquiries or just to say hi!,
        </small>
      </div>
      <div className={styles['container']}>
        <Card
          title="Discord"
          value="Click Me!"
          href="https://discordhub.com/profile/407130330710147073"
        />
        <Card title="Email" value="contact@emojipati.xyz"/>
        <Card
          title="Github"
          value="Click Me!"
          href="https://github.com/emojipati"
        />
        <Card
          title="Youtube"
          value="Click Me!"
          href="https://youtube.com/@EmojiPati"
        />
        <Card
          title="Twitter"
          value="Click Me!"
          href="https://twitter.com/EmojiPati"
        />
      </div>
    </Content>
  );
};

export default Contact;

import React from 'react';

import Particles from '../components/Particles';
import Content from '../components/Content';
import Meta from '../components/Meta';

export default function NotFound() {
  return (
    <Content>
      <Meta title="404 Not Found" noindex nofollow />
      <Particles particles={['4', '0']} />
    </Content>
  );
}

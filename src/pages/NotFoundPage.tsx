import React, {memo} from 'react';
import {NotFound} from '../components/NotFound/NotFound';

const NotFoundPage = memo(() => {
  return <NotFound message="Not found page" />;
});

export default NotFoundPage;

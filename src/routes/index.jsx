import React from 'react';
import { Route } from 'react-router';

import AppView from 'src/views/AppView';

export default (store) => {
  return (
    <Route path="/" component={AppView} />
  );
};
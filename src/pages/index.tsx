import React from 'react';
import { Redirect, Route as LibRoute, Switch } from 'react-router-dom';

import Todo from './todo';

const Route = () => {
  return (
    <Switch>
      <LibRoute path='/todo' component={Todo}/>
      <Redirect exact from='/' to='/todo/list'/>
    </Switch>
  );
};

export default Route;

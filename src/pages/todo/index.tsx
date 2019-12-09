import React from 'react';
import { Route as LibRoute, Switch } from 'react-router-dom';

import { MatchProps } from 'src/pages/types';
import Add from './add';
import List from './list';

const Route: React.FC<MatchProps> = ({ match: { path } }) => {
  return (
    <div>
      <Switch>
        <LibRoute exact path={`${path}/list`} component={List} />
        <LibRoute exact path={`${path}/add`} component={Add} />
      </Switch>
    </div>
  );
};

export default Route;

import React from 'react';

import { Todo } from '../../types';

const Item: React.FC<Todo> = ({ text }) => <li>{text}</li>;

export default Item;

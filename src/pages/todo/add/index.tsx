import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addTodo as addTodoAction } from '../actions';
import styles from './index.module.scss';

interface Props {
  addTodo: typeof addTodoAction;
}

export const Add: React.FC<Props> = ({ addTodo }) => {
  const history = useHistory();
  const [text, setText] = useState<string>('');

  const createTodo = () => {
    addTodo(text);
    setText('');
    history.goBack();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
      </header>
      <section className={styles.content}>
        <label>Todo: </label>
        <input
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
        <button onClick={createTodo}>
          create
        </button>
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo: addTodoAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(Add);

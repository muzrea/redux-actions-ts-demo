import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../../reducer';
import { requestTodoList as requestTodoListAction } from '../actions';
import { selectTodos } from '../selector';
import { Todo } from '../types';
import styles from './index.module.scss';
import Item from './Item';

interface Props {
  todos: Todo[];
  requestTodoList: typeof requestTodoListAction;
}

export const List: React.FC<Props> = ({ todos, requestTodoList }) => {
  return (
    <div className={styles.container}>
      <div>
      </div>
      <header className={styles.header}>
        <h1>
         todo list
        </h1>
      </header>
      <section className={styles.content}>
        <ul className={styles.todoList}>
          {todos.map(({ id, ...rest }, index) => (
            <Item key={`${id}_${index}`} id={id} {...rest} />
          ))}
        </ul>
      </section>
      <section>
        <button className={styles.button} onClick={requestTodoList}>
          get more
        </button>
        <div className={styles.navLink}>
          <Link to='/todo/add'>
            create todo
          </Link>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = {
  requestTodoList: requestTodoListAction,
};

const mapStateToProps = (state: AppState) => ({
  todos: selectTodos(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

import { TodoState } from './types';

export const queryTodoList = (): Promise<TodoState> => (
  new Promise<TodoState>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: new Date().getTime(),
          text: 'Learn redux actions',
        },
        {
          id: new Date().getTime(),
          text: 'Book ticket to London',
        },
      ]);
    }, 1000);
  })
);

export default {
  queryTodoList,
};

import { queryTodoList } from '../api';

describe('api', () => {
  it('should query todo list successfully', () => {
    return queryTodoList().then((list) => {
      expect(list[0].text).toEqual('Learn redux actions');
      expect(list[1].text).toEqual('Book ticket to London');
    });
  });
});

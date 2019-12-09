import { Action, ActionFunctionAny } from 'redux-actions';

export interface MatchProps {
  match: {
    path: string,
  };
}

export type CommonAction<P> = ActionFunctionAny<Action<P>>;

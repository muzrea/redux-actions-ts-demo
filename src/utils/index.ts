import { ActionFunctionAny } from 'redux-actions';

export const isDev = () => process.env.NODE_ENV === 'development';
export const identity: ActionFunctionAny<null> = () => null;

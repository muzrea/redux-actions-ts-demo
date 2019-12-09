declare module 'redux-actions' {

  interface BaseAction {
    type: string;
  }

  interface Action<Payload> extends BaseAction {
    payload: Payload;
    error?: boolean;
  }

  interface ActionMeta<Payload, Meta> extends Action<Payload> {
    meta: Meta;
  }

  interface CombinedActionType {
    _dummy: undefined;
  }

  // tslint:disable-next-line:max-line-length
  type ReducerMapValue<State, Payload> = Reducer<State, Payload> | ReducerNextThrow<State, Payload> | ReducerMap<State, Payload>;

  interface ReducerMap<State, Payload> {
    [actionType: string]: ReducerMapValue<State, Payload>;
  }

  interface ReducerMapMeta<State, Payload, Meta> {
    // tslint:disable-next-line:max-line-length
    [actionType: string]: ReducerMeta<State, Payload, Meta> | ReducerNextThrowMeta<State, Payload, Meta> | ReducerMapMeta<State, Payload, Meta>;
  }

  interface ReducerNextThrow<State, Payload> {
    next?(state: State, action: Action<Payload>): State;
    throw?(state: State, action: Action<Payload>): State;
  }

  interface ReducerNextThrowMeta<State, Payload, Meta> {
    next?(state: State, action: ActionMeta<Payload, Meta>): State;
    throw?(state: State, action: ActionMeta<Payload, Meta>): State;
  }

  type BaseActionFunctions<TAction> =
    ActionFunction0<TAction> |
    ActionFunction1<any, TAction> |
    ActionFunction2<any, any, TAction> |
    ActionFunction3<any, any, any, TAction> |
    ActionFunction4<any, any, any, any, TAction> |
    ActionFunctionAny<TAction>;

  type ActionFunctions<Payload> = BaseActionFunctions<Action<Payload>>;

  type ActionWithMetaFunctions<Payload, Meta> = BaseActionFunctions<ActionMeta<Payload, Meta>>;

  type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

  type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

  type ReduxCompatibleReducer<State, Payload> = (state: State | undefined, action: Action<Payload>) => State;

  // tslint:disable-next-line:max-line-length
  type ReduxCompatibleReducerMeta<State, Payload, Meta> = (state: State | undefined, action: ActionMeta<Payload, Meta>) => State;

  /** argument inferring borrowed from lodash definitions */
  type ActionFunction0<R> = () => R;
  type ActionFunction1<T1, R> = (t1: T1) => R;
  type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
  type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
  type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
  type ActionFunctionAny<R> = (...args: any[]) => R;

  function createAction(
    actionType: string,
  ): ActionFunctionAny<Action<any>>;

  function createAction<Payload>(
    actionType: string,
    payloadCreator: ActionFunction0<Payload>,
  ): ActionFunction0<Action<Payload>>;

  function createAction<Payload, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
  ): ActionFunction1<Arg1, Action<Payload>>;

  function createAction<Payload, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
  ): ActionFunction2<Arg1, Arg2, Action<Payload>>;

  function createAction<Payload, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
  ): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>;

  function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
  ): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>;

  function createAction<Payload>(
    actionType: string,
  ): ActionFunction1<Payload, Action<Payload>>;

  function createAction<Meta>(
    actionType: string,
    payloadCreator: null | undefined,
    metaCreator: ActionFunctionAny<Meta>,
  ): ActionFunctionAny<ActionMeta<any, Meta>>;

  function createAction<Payload, Meta>(
    actionType: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>,
  ): ActionFunctionAny<ActionMeta<Payload, Meta>>;

  function createAction<Payload, Meta, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
    metaCreator: ActionFunction1<Arg1, Meta>,
  ): ActionFunction1<Arg1, ActionMeta<Payload, Meta>>;

  function createAction<Payload, Meta, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator: ActionFunction2<Arg1, Arg2, Meta>,
  ): ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>;

  function createAction<Payload, Meta, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>,
  ): ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>;

  function createAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>,
  ): ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>;

  function handleAction<State, Payload>(
    actionType: string | ActionFunctions<Payload> | CombinedActionType,
    reducer: Reducer<State, Payload> | ReducerNextThrow<State, Payload>,
    initialState: State,
  ): ReduxCompatibleReducer<State, Payload>;

  function handleAction<State, Payload, Meta>(
    actionType: string | ActionWithMetaFunctions<Payload, Meta> | CombinedActionType,
    reducer: ReducerMeta<State, Payload, Meta> | ReducerNextThrowMeta<State, Payload, Meta>,
    initialState: State,
  ): ReduxCompatibleReducerMeta<State, Payload, Meta>;

  interface Options {
    prefix?: string;
    namespace?: string;
  }

  function handleActions<StateAndPayload>(
    reducerMap: ReducerMap<StateAndPayload, StateAndPayload>,
    initialState: StateAndPayload,
    options?: Options,
  ): ReduxCompatibleReducer<StateAndPayload, StateAndPayload>;

  function handleActions<State, Payload>(
    reducerMap: ReducerMap<State, Payload>,
    initialState: State,
    options?: Options,
  ): ReduxCompatibleReducer<State, Payload>;

  function handleActions<State, Payload, Meta>(
    reducerMap: ReducerMapMeta<State, Payload, Meta>,
    initialState: State,
    options?: Options,
  ): ReduxCompatibleReducerMeta<State, Payload, Meta>;

  function combineActions(...actionTypes: Array<ActionFunctions<any> | string | symbol>): CombinedActionType;

  interface ActionMap<Payload, Meta> {
    [actionType: string]:
      ActionMap<Payload, Meta> |
      ActionFunctionAny<Payload> |
      [ActionFunctionAny<Payload>, ActionFunctionAny<Meta>] |
      undefined;
  }

  interface ActionFunctionMapAny {
    [actionName: string]: ActionFunctionAny<Action<any>>;
  }

  interface ActionFunctionMapAny<Payload> {
    [actionName: string]: ActionFunctionAny<Action<Payload>>;
  }

  function createActions<Payload>(
    actionMapOrIdentityAction: ActionMap<Payload, any> | string,
    ...identityActions: Array<string | Options>
  ): {
    [actionName: string]: ActionFunctionAny<Action<Payload>>,
  };

  function createActions<P, S>(
    actionMapOrIdentityAction: ActionMap<P, any> | string,
    ...identityActions: Array<S | Options>
  ): {
    [actionName: string]: ActionFunctionMapAny<P>,
  };

  function createActions(
    actionMapOrIdentityAction: ActionMap<any, any> | string,
    ...identityActions: Array<string | Options>
  ): {
    [actionName: string]: ActionFunctionAny<Action<any>>,
  };
}

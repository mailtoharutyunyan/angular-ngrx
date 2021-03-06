import { Action, createReducer, on } from '@ngrx/store';
import * as TestActions from '../actions/test.actions';

export const testFeatureKey = 'test';

// tslint:disable-next-line:no-empty-interface
export interface State {

}

export const initialState: State = {

};

const testReducer = createReducer(
  initialState,

  on(TestActions.loadTests, state => state),
  on(TestActions.loadTestsSuccess, (state, action) => state),
  on(TestActions.loadTestsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return testReducer(state, action);
}

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import companiesSlice from './companiesSlice';

const rootReducer = combineReducers({
  companies: companiesSlice
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppState = ReturnType<typeof rootReducer>;
type AppExtraArg = undefined;
export type AppThunkResult<R = Promise<void>> = ThunkAction<R, AppState, AppExtraArg, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<AppState, AppExtraArg, Action<string>>;
export const useAppDispatch = (): AppThunkDispatch => useDispatch<AppThunkDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

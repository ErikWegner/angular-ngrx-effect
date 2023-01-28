import { createReducer, on } from "@ngrx/store";
import { appLoadFailure, appLoading, appQuoteLoaded } from "./app.actions";

export const enum DataLoadingState {
  Init,
  Loading,
  Loaded,
}

export interface LoadingErrorState {
  errorMessage: string;
}

export type DataLoaderState = DataLoadingState | LoadingErrorState;

export interface DisplayState {
  dataLoader: DataLoaderState;
  text: string | null;
}

export const initialState: DisplayState = {
  dataLoader: DataLoadingState.Init,
  text: null,
};

export const appReducer = createReducer(
  initialState,
  on(
    appLoading,
    (state: DisplayState): DisplayState =>
      <DisplayState>{
        ...state,
        dataLoader: DataLoadingState.Loading,
        text: null,
      }
  ),
  on(
    appQuoteLoaded,
    (state: DisplayState, props): DisplayState =>
      <DisplayState>{
        ...state,
        dataLoader: DataLoadingState.Loaded,
        text: props.text,
      }
  ),
  on(
    appLoadFailure,
    (state: DisplayState, props): DisplayState =>
      <DisplayState>{
        ...state,
        dataLoader: <LoadingErrorState>{
          errorMessage: props.errormessage
        },
        text: null,
      }
  ),
);

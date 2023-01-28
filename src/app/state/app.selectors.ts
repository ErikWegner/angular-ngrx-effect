import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataLoadingState, DisplayState, LoadingErrorState } from './app.reducer';

const selectFeature = createFeatureSelector<DisplayState>('app');

export const selectLoading = createSelector(
  selectFeature,
  (state: DisplayState) => state.dataLoader === DataLoadingState.Loading
);

export const selectError = createSelector(
  selectFeature,
  (state: DisplayState) => (state.dataLoader as LoadingErrorState).errorMessage ?? null
)

export const selectText = createSelector(
  selectFeature,
  (state: DisplayState) => state.text
);

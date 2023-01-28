import { createAction, props } from '@ngrx/store';

export const appClicked = createAction('[UI] button clicked');
export const appLoading = createAction('[UI] app loading');
export const appQuoteLoaded = createAction(
  '[Service] quote loaded',
  props<{ text: string }>()
);
export const appLoadFailure = createAction(
  '[Service] load failed',
  props<{ errormessage: string }>()
);

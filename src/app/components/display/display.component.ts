import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appClicked } from '../../state/app.actions';
import { selectError, selectLoading, selectText } from '../../state/app.selectors';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  loading$ = this.store.select(selectLoading);
  text$ = this.store.select(selectText);
  error$ = this.store.select(selectError);

  constructor(private readonly store: Store) { }

  public click(): void {
    this.store.dispatch(appClicked());
  }
}

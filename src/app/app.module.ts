import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { AppEffects } from './state/app.effects';
import { appReducer } from './state/app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    // StoreModule.forRoot({
    //   app: appReducer,
    // }),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  declarations: [AppComponent, DisplayComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

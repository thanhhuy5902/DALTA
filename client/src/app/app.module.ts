import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { carReducer } from './ngrx/reducers/car.reducer';
import { CarEffects } from './ngrx/effects/car.effects';
import { storageReducer } from './ngrx/reducers/storage.reducer';
import { StorageEffects } from './ngrx/effects/storage.effects';
import { manufacturerReducer } from './ngrx/reducers/manufacturker.reducer';
import { ManufacturerEffects } from './ngrx/effects/manufacturer.effects';
import { categoryReducer } from './ngrx/reducers/category.reducer';
import { CategoryEffects } from './ngrx/effects/category.effects';
import { userReducer } from './ngrx/reducers/user.reducer';
import { UserEffects } from './ngrx/effects/user.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      car: carReducer,
      storage: storageReducer,
      manufacturer: manufacturerReducer,
      category: categoryReducer,
      user: userReducer,
    }),
    EffectsModule.forRoot([CarEffects, StorageEffects, ManufacturerEffects, CategoryEffects, UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

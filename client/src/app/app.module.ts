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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environments';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { authReducer } from './ngrx/reducers/auth.reducer';
import { AuthEffects } from './ngrx/effects/auth.effects';

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
      auth: authReducer,
      user: userReducer,
    }),
    EffectsModule.forRoot([
      CarEffects,
      StorageEffects,
      ManufacturerEffects,
      CategoryEffects,
      AuthEffects,
      UserEffects
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';
import { SeriesComponent } from './views/series/series.component';
import { AddSeriesComponent } from './views/add-series/add-series.component';
import { SingleSeriesComponent } from './views/single-series/single-series.component';
import { EditSeriesComponent } from './views/edit-series/edit-series.component';
import {AppRoutingModule} from "./app-routing.module";
import {SeriesService} from "./services/series/series.service";
import {AuthService} from "./services/auth/auth.service";
import { HeaderComponent } from './components/header/header.component';
import { AddCommentComponent } from './views/add-comment/add-comment.component';
import { FormCommentComponent } from './components/form-comment/form-comment.component';
import {ErrorsFormComponent} from "./components/errors-form/errors-form.component";
import { FormSeriesComponent } from './components/form-series/form-series.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    SeriesComponent,
    AddSeriesComponent,
    SingleSeriesComponent,
    EditSeriesComponent,
    HeaderComponent,
    AddCommentComponent,
    FormCommentComponent,
      ErrorsFormComponent,
      FormSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

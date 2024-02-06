import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { CategoryComponent } from './components/category/category.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TableComponent,
    NavbarComponent,
    PostComponent,
    CategoryComponent,
    MycomponentComponent,
    UsersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

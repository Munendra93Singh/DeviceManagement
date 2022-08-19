import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeptbaseComponent } from './deptbase/deptbase.component';
import { DatePipe } from '@angular/common';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SignInComponent } from './sign-in/sign-in.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DeptbaseComponent,
    SignInComponent,
  

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

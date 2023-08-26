import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AllPropertiesPageComponent } from './all-properties-page/all-properties-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrartionComponent } from './registrartion/registrartion.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { AddPropertyFormComponent } from './add-property-form/add-property-form.component';
import { UpdatePropertyFormComponent } from './update-property-form/update-property-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertycardsComponent } from './propertycards/propertycards.component';
import { BasicservicesComponent } from './basicservices/basicservices.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { NotificationComponent } from './notification/notification.component';
import { PropertyCategoryPageComponent } from './property-category-page/property-category-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllbookingPageComponent } from './allbooking-page/allbooking-page.component';
import { AllFeedbacksPageComponent } from './all-feedbacks-page/all-feedbacks-page.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { PaymentComponent } from './payment/payment.component';

// import { NotificationComponent } from './notification/notification.component';
// import { AuthInterceptor } from './Interceptor/AuthInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    BookingPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrartionComponent,
    BuyerProfileComponent,
    NavbarComponent,
    DashboardComponent,
    PropertycardsComponent,
    BasicservicesComponent,
    FeedbackComponent,
    AllPropertiesPageComponent,
    AddPropertyFormComponent,
    UpdatePropertyFormComponent,
    AboutUsComponent,
    ViewPropertyComponent,
    SchedulePageComponent,
    MenuBarComponent,
    NotificationComponent,
    PropertyCategoryPageComponent,
    PageNotFoundComponent,
    AllbookingPageComponent,
    AllFeedbacksPageComponent,
    ChatBotComponent,
    PaymentComponent,
   
    // NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSliderModule
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

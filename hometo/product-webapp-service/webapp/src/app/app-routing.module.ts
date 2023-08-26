import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrartionComponent } from './registrartion/registrartion.component';
import { LoginService } from './services/login/login.service';
import { UpdatePropertyFormComponent } from './update-property-form/update-property-form.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { AllPropertiesPageComponent } from './all-properties-page/all-properties-page.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PropertyCategoryPageComponent } from './property-category-page/property-category-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { AllbookingPageComponent } from './allbooking-page/allbooking-page.component';
import { AllFeedbacksPageComponent } from './all-feedbacks-page/all-feedbacks-page.component';
import { NotificationComponent } from './notification/notification.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:DashboardComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'property-type/:propertyType', component:PropertyCategoryPageComponent},
  {path:'all-properties', component:AllPropertiesPageComponent},
  {path:'property/:propertyID', component:ViewPropertyComponent},
  {path:'login', component:LoginComponent},
  {path:'registrartion', component:RegistrartionComponent},
  {path:'buyerprofile',component:BuyerProfileComponent},
  {path:'schedule-visit', component:SchedulePageComponent},
  {path: 'all-booking', component: AllbookingPageComponent },
  {path:'customer-feedbacks', component:AllFeedbacksPageComponent},
  {path: 'notifications', component:NotificationComponent},
  {path: 'payment/:amount', component:PaymentComponent},
  {path: '**', component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

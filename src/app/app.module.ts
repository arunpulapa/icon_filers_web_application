import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services-tax/services/services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RefundComponent } from './components/refund/refund.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RefundEstimateComponent } from './components/refund-estimate/refund-estimate.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FederalStateFilingComponent } from './components/services-tax/federal-state-filing/federal-state-filing.component';
import { TaxRepresentationComponent } from './components/services-tax/tax-representation/tax-representation.component';
import { ITINPreparationComponent } from './components/services-tax/itin-preparation/itin-preparation.component';
import { AdvancedTaxPlanningComponent } from './components/services-tax/advanced-tax-planning/advanced-tax-planning.component';
import { FBARFATCAComplianceComponent } from './components/services-tax/fbar-fatca-compliance/fbar-fatca-compliance.component';
import { AmendmentFilingComponent } from './components/services-tax/amendment-filing/amendment-filing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    PricingComponent,
    RefundComponent,
    ContactUsComponent,
    RefundEstimateComponent,
    LoginComponent,
    RegisterComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    FederalStateFilingComponent,
    TaxRepresentationComponent,
    ITINPreparationComponent,
    AdvancedTaxPlanningComponent,
    FBARFATCAComplianceComponent,
    AmendmentFilingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

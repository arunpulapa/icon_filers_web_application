import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RefundComponent } from './components/refund/refund.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RefundEstimateComponent } from './components/refund-estimate/refund-estimate.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { FederalStateFilingComponent } from './components/services-tax/tax-preparation-filing/federal-state-filing/federal-state-filing.component';
import { TaxRepresentationComponent } from './components/services-tax/tax-representation/tax-representation.component';
import { ITINPreparationComponent } from './components/services-tax/itin-preparation/itin-preparation.component';
import { AdvancedTaxPlanningComponent } from './components/services-tax/advanced-tax-planning/advanced-tax-planning.component';
import { FBARFATCAComplianceComponent } from './components/services-tax/fbar-fatca-compliance/fbar-fatca-compliance.component';
import { AmendmentFilingComponent } from './components/services-tax/amendment-filing/amendment-filing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ForeignOwnedUSEntitiesComponent } from './components/services-tax/foreign-owned-us-entities/foreign-owned-us-entities.component';
import { PayrollServicesComponent } from './components/services-tax/payroll-services/payroll-services.component';
import { SalesTaxComponent } from './components/services-tax/sales-tax/sales-tax.component';
import { AnnualReportingComponent } from './components/services-tax/annual-reporting/annual-reporting.component';
import { LLCRegistrationComponent } from './components/services-tax/llc-registration/llc-registration.component';
import { BusinessTaxReturnsComponent } from './components/services-tax/tax-preparation-filing/business-tax-returns/business-tax-returns.component';
import { InternationalTaxReturnsComponent } from './components/services-tax/tax-preparation-filing/international-tax-returns/international-tax-returns.component';
import { PersonalTaxPlanningComponent } from './components/services-tax/tax-advisory/personal-tax-planning/personal-tax-planning.component';
import { BusinessEntityTaxPlanningComponent } from './components/services-tax/tax-advisory/business-entity-tax-planning/business-entity-tax-planning.component';
import { GENERALADVISORYComponent } from './components/services-tax/tax-advisory/general-advisory/general-advisory.component';
import { ITINApplicationRenewalComponent } from './components/services-tax/ITIN & W-7 Services/itin-application-renewal/itin-application-renewal.component';
import { W7EINAssistanceComponent } from './components/services-tax/ITIN & W-7 Services/w7-ein-assistance/w7-ein-assistance.component';
import { CertifiedAcceptanceAgentComponent } from './components/services-tax/ITIN & W-7 Services/certified-acceptance-agent/certified-acceptance-agent.component';
import { LLCCorporationFormationComponent } from './components/services-tax/Company-Formation-Compliance/llc-corporation-formation/llc-corporation-formation.component';
import { RegisteredAgentAnnualReportingComponent } from './components/services-tax/Company-Formation-Compliance/registered-agent-annual-reporting/registered-agent-annual-reporting.component';
import { EINStateRegistrationsComponent } from './components/services-tax/Company-Formation-Compliance/ein-state-registrations/ein-state-registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
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
    AmendmentFilingComponent,
    ForeignOwnedUSEntitiesComponent,
    PayrollServicesComponent,
    SalesTaxComponent,
    AnnualReportingComponent,
    LLCRegistrationComponent,
    BusinessTaxReturnsComponent,
    InternationalTaxReturnsComponent,
    PersonalTaxPlanningComponent,
    BusinessEntityTaxPlanningComponent,
    GENERALADVISORYComponent,
    ITINApplicationRenewalComponent,
    W7EINAssistanceComponent,
    CertifiedAcceptanceAgentComponent,
    LLCCorporationFormationComponent,
    RegisteredAgentAnnualReportingComponent,
    EINStateRegistrationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

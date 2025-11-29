import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services-tax/services/services.component';
import { RefundEstimateComponent } from './components/refund-estimate/refund-estimate.component';
import { RefundComponent } from './components/refund/refund.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AmendmentFilingComponent } from './components/services-tax/amendment-filing/amendment-filing.component';
import { AdvancedTaxPlanningComponent } from './components/services-tax/advanced-tax-planning/advanced-tax-planning.component';
import { FBARFATCAComplianceComponent } from './components/services-tax/fbar-fatca-compliance/fbar-fatca-compliance.component';
import { ITINPreparationComponent } from './components/services-tax/itin-preparation/itin-preparation.component';
import { FederalStateFilingComponent } from './components/services-tax/federal-state-filing/federal-state-filing.component';
import { TaxRepresentationComponent } from './components/services-tax/tax-representation/tax-representation.component';
import { PayrollServicesComponent } from './components/services-tax/payroll-services/payroll-services.component';
import { SalesTaxComponent } from './components/services-tax/sales-tax/sales-tax.component';
import { AnnualReportingComponent } from './components/services-tax/annual-reporting/annual-reporting.component';
import { LLCRegistrationComponent } from './components/services-tax/llc-registration/llc-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'refund', component: RefundComponent },
  { path: 'refund-estimate', component: RefundEstimateComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'amendment-filing', component: AmendmentFilingComponent },
  { path: 'advanced-tax-planning', component: AdvancedTaxPlanningComponent },
  { path: 'fbar-fatca', component: FBARFATCAComplianceComponent },
  { path: 'itin-preparation', component: ITINPreparationComponent },
  { path: 'federal-state-filing', component: FederalStateFilingComponent },
  { path: 'tax-representation', component: TaxRepresentationComponent },
  { path: 'payroll-services', component: PayrollServicesComponent },
  { path: 'sales-tax', component: SalesTaxComponent },
  { path: 'annual-reporting', component: AnnualReportingComponent },
  { path: 'llc-registration', component: LLCRegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ConvertToSpacesPipe } from './shared/pipe/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './shared/services/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SubscribeService } from './shared/subscribe.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductComponent },
      { path: 'template', component: TemplateFormComponent },
      { path: 'reactive', component: ReactiveFormComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent,  pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
    ])
  ],
  providers: [ProductService, SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

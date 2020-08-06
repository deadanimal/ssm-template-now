import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { RouterModule } from '@angular/router';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ImageUploadModule } from 'app/shared/image-upload/image-upload.module';



@NgModule({
  declarations: [HomeComponent, ProductsComponent, CartComponent],
  imports: [
    CommonModule,
    NgbModule,
    NouisliderModule,
    TagInputModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    AngularMultiSelectModule,
    FormsModule,
    NgxGalleryModule,
    ImageUploadModule
  ]
})
export class GlobalModule { }

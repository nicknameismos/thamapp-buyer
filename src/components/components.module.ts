import { NgModule } from '@angular/core';
import { ListScollXComponent } from './list-scoll-x/list-scoll-x';
import { PreloadImage } from './preload-image/preload-image';
import { IonFormPaymentComponent } from './ion-form-payment/ion-form-payment';
import { IonFormPaymentOptionComponent } from './ion-form-paymentoption/ion-form-paymentoption';
import { IonFormDeliveryComponent } from './ion-form-delivery/ion-form-delivery';
import { IonFormBankComponent } from './ion-form-bank/ion-form-bank';
import { IonDetailProductComponent } from './ion-detail-product/ion-detail-product';
@NgModule({
	declarations: [ListScollXComponent,
		PreloadImage,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent,
    IonDetailProductComponent],
	imports: [],
	exports: [ListScollXComponent,
		PreloadImage,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent,
    IonDetailProductComponent]
})
export class ComponentsModule { }

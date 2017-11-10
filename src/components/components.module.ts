import { NgModule } from '@angular/core';
import { ListScollXComponent } from './list-scoll-x/list-scoll-x';
import { PreloadImage } from './preload-image/preload-image';
import { IonFormPaymentComponent } from './ion-form-payment/ion-form-payment';
import { IonFormPaymentOptionComponent } from './ion-form-paymentoption/ion-form-paymentoption';
import { IonFormDeliveryComponent } from './ion-form-delivery/ion-form-delivery';
import { IonFormBankComponent } from './ion-form-bank/ion-form-bank';
@NgModule({
	declarations: [ListScollXComponent,
		PreloadImage,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent],
	imports: [],
	exports: [ListScollXComponent,
		PreloadImage,
    IonFormPaymentComponent,
    IonFormPaymentOptionComponent,
    IonFormDeliveryComponent,
    IonFormBankComponent]
})
export class ComponentsModule { }

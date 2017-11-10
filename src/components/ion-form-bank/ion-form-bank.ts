import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IonFormPaymentOptionComponent } from './../ion-form-paymentoption/ion-form-paymentoption';

/**
 * Generated class for the IonFormBankComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-form-bank',
  templateUrl: 'ion-form-bank.html'
})
export class IonFormBankComponent {
  @Input() paymentgateway: any;
  @Input() value: string;
  @Input() datapayment: any;

  constructor(public parent: IonFormPaymentOptionComponent) {
    console.log('Hello IonFormBankComponent Component');
  }
  selectcounter(data) {
    this.datapayment = this.datapayment ? this.datapayment : {};
    this.datapayment.order.payment.counterservice = data.name;
  }
}

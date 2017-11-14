import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Constants } from "../../app/app.contant";
moment.locale('th-th');
/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return moment(value).fromNow();
  }
}
// return moment(value).locale(Constants.locale).fromNow();

import { NgModule } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [],
  exports: [
    MenuModule,
    CardModule,
    ButtonModule
  ]

})
export class PrimengModule { }

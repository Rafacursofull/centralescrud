import { NgModule } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    MenuModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    TableModule
  ]

})
export class PrimengModule { }

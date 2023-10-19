import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FieldComponent} from './components/field/field.component';
import {FormsModule} from '@angular/forms';
import {TableComponent} from './components/table/table.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    MainPageComponent,
    FieldComponent,
    TableComponent,
  ],
  exports: [MainPageComponent],
})
export class LibsDataListLibModule {}

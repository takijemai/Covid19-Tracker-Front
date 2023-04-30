import { NgModule } from "@angular/core";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";

const sharedModule= [
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatPaginatorModule,

]



@NgModule({
  imports: [...sharedModule],
  exports: [...sharedModule],
})

export class SharedModule{}

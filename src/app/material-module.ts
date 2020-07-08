import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  exports: [   
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule {}

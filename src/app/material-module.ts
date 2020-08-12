import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  exports: [   
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule {}

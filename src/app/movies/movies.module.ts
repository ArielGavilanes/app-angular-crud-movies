import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ViewAllComponent } from './view-all/view-all.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ViewAllComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
  ],
})
export class MoviesModule {}

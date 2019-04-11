import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FotosvisitasPage } from './fotosvisitas.page';

const routes: Routes = [
  {
    path: '',
    component: FotosvisitasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FotosvisitasPage]
})
export class FotosvisitasPageModule {}

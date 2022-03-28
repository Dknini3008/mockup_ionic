import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'friends',
        loadChildren: () => import('../friends/friends.module').then( m => m.FriendsPageModule)
      },
      {
        path: 'report',
        loadChildren: () => import('../report/report.module').then( m => m.ReportPageModule)
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

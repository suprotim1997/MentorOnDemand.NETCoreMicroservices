import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNotificationRoutingModule } from './admin-notification-routing.module';
import { AdminNotificationComponent } from './admin-notification.component';


@NgModule({
  declarations: [AdminNotificationComponent],
  imports: [
    CommonModule,
    AdminNotificationRoutingModule
  ]
})
export class AdminNotificationModule { }

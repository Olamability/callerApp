import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyOtpPageModule } from './verify-otp/verify-otp.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VerifyOtpPageModule
  ],
  exports: [
    VerifyOtpPageModule
  ]
})
export class PageModule { }

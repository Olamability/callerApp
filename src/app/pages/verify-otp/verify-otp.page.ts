import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/httpClient/http-client.service';
import { StorehouseService } from 'src/app/services/storehouse.service/storehouse.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {

  otp: string = "";
  loading: boolean = false;
  // userPhoneNumber: string;
  countryCode: string = "+234";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

    // Countdown
    isCountDown: boolean = false;

    countDownValue: number = 60;

  constructor(
    public storehouseService: StorehouseService,
    // public alertController: AlertController,
    private router: Router,
    private http: HttpClientService,
    // private messages: MessageService,
    // private rideSocketService: RidesSocketService
  ) { }

  ngOnInit() {
  }

}

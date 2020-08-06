import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isCollapsed = true;

  // Image
  imgLogo = 'assets/img/logo/logo-ssm.png'
  imgBackground = 'assets/img/background/kl.jpg';

  constructor(private router: Router) {
    router.events.subscribe(val => {
      this.isCollapsed = true;
    });
  }

  mobileView(){
    if (window.innerWidth < 992) {
        return true;
    }
    return false;
  }

  ngOnInit(): void {
  }

}

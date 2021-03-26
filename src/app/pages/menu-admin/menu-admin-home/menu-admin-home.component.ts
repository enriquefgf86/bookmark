import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin-home',
  templateUrl: './menu-admin-home.component.html',
  styleUrls: ['./menu-admin-home.component.css']
})
export class MenuAdminHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.router.navigate(['/tabs/tab1'])
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { employees, stats } from '../../data/dashboardData';

@Component({
  imports: [CommonModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  userName: string = 'User';
  constructor() {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.userName = email.split('@')[0];
    }
  }
  stats = stats;
  employees = employees;
}

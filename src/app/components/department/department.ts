import { Component, OnInit } from '@angular/core';
import { MOCK_DEPARTMENTS } from '../../data/departmentData';
import { Department } from '../../interfaces/department';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, FormsModule],
  selector: 'app-department',
  styleUrl: './department.css',
  templateUrl: './department.html',
})
export class Departments implements OnInit {
  searchTerm: string = '';
  departments: Department[] = MOCK_DEPARTMENTS;
  filteredDepartments: Department[] = [];
  ngOnInit() {
    this.filteredDepartments = [...this.departments];
  }
  filterDepartments() {
    const search = this.searchTerm.toLowerCase().trim();
    if (!search) {
      this.filteredDepartments = [...this.departments];
      return;
    }
    this.filteredDepartments = this.departments.filter(
      (dept) =>
        dept.name.toLowerCase().includes(search) ||
        dept.head.toLowerCase().includes(search) ||
        dept.id.toLowerCase().includes(search),
    );
  }
}

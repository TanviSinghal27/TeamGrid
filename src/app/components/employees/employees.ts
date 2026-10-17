import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../interfaces/employee';
import { MOCK_Employees } from '../../data/employeeData';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
  encapsulation: ViewEncapsulation.None,
})
export class Employees {
  searchTerm: string = '';
  employees: Employee[] = MOCK_Employees;
  filteredEmployees: Employee[] = [];
  ngOnInit() {
    this.filteredEmployees = [...this.employees];
    return;
  }

  filterEmployees() {
    const search = this.searchTerm.toLowerCase().trim();
    if (!search) {
      this.filteredEmployees = [...this.employees];
      return;
    }
    this.filteredEmployees = this.employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search) ||
        emp.id.toLowerCase().includes(search) ||
        emp.role.toLowerCase().includes(search) ||
        emp.department.toLowerCase().includes(search),
    );
  }

  // getStatusClass(status: string): string {
  //   if (!status) return '';
  //   return status.toLowerCase().replace('', '-');
  // }
}

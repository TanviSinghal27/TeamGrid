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
  currentSortOrder: 'asc' | 'desc' | '' = '';
  ngOnInit() {
    this.filteredEmployees = [...this.employees];
    return;
  }

  filterEmployees() {
    const search = this.searchTerm.toLowerCase().trim();
    if (!search) {
      this.filteredEmployees = [...this.employees];
      return;
    } else {
      this.filteredEmployees = this.employees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(search) ||
          emp.id.toLowerCase().includes(search) ||
          emp.role.toLowerCase().includes(search) ||
          emp.department.toLowerCase().includes(search) ||
          emp.salary.toLowerCase().includes(search),
      );
    }

    if (this.currentSortOrder) {
      this.applySalarySort(this.currentSortOrder);
    }
  }

  sortEmployeesBySalary() {
    this.currentSortOrder = this.currentSortOrder == 'asc' ? 'desc' : 'asc';
    this.applySalarySort(this.currentSortOrder);
  }

  private applySalarySort(order: 'asc' | 'desc') {
    this.filteredEmployees.sort((a, b) => {
      const salaryA = parseFloat(a.salary.replace(/,/g, ''));
      const salaryB = parseFloat(b.salary.replace(/,/g, ''));
      return order === 'asc' ? salaryA - salaryB : salaryB - salaryA;
    });
  }
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  salary: string;
  status: 'Active' | 'On Leave' | 'Terminated';
}

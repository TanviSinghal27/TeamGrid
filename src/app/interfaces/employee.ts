export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Terminated';
}

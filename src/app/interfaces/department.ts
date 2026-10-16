export interface Department {
  id: string;
  name: string;
  head: string;
  totalEmployees: number;
  status: 'Active' | 'Inactive';
}

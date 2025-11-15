interface User {
  name: string;
  age: number
}
interface Designation {
  position: string;
  location: string;
}

interface User extends Designation {
  
}

const userWithRole: User = {
  name: 'zakaria',
  age: 26,
  position: 'sr. dev',
  location: 'dhaka'
}

type ModUser = {
  name: string;
  userprop: string
}

type Role = {
  role: string;
  roleprop: string
}

type ModUserWithRole = ModUser | Role;

const newUser: ModUserWithRole = {
  name: 'zack',
  userprop: '2',
  role: 'dev',
  roleprop: '3'
}



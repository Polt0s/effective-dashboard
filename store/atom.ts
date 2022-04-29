import { atom } from 'recoil';

interface IUsers {
  name: string;
  userName: string;
  email: string;
}

export const getUsers = atom({
  key: 'users',
  default: [] as IUsers[],
});

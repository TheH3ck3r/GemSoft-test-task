import { UserProps } from "@/types/props";
import { makeAutoObservable } from "mobx";

export class UsersDataStore {
  usersData: UserProps[] = [
    {
      firstName: "Михаил",
      lastName: "Нечаев",
      middleName: "Александрович",
      age: 20,
      gender: "male",
      interests: ["music", "games", "movies"],
      musicGenre: "electronic",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setUsersData(data: UserProps[]) {
    this.usersData = data;
  }

  updateUser(id: number, data: UserProps) {
    this.usersData[id] = data;
  }

  deleteUser(id: number) {
    this.usersData.splice(id, 1);
  }

  addUser(partialData: UserProps) {
    this.usersData.push(partialData);
  }

  get users(): UserProps[] {
    return this.usersData;
  }
}

const usersDataStore = new UsersDataStore();

export default usersDataStore;

import { UserProps } from "@/types/props";
import { makeAutoObservable } from "mobx";

export class UsersDataStore {
  usersData: UserProps[] = [
    {
      firstName: "Иван",
      lastName: "Иванов",
      middleName: "Иванович",
      age: 30,
      gender: "male",
      interests: ["music", "games"],
      musicGenre: "rock",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setUsersData(data: UserProps[]) {
    this.usersData = data;
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

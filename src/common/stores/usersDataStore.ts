import { UserProps } from "@/types/props";
import { makeAutoObservable } from "mobx";

export class UsersDataStore {
  UsersData: UserProps[] = [
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
    this.UsersData = data;
  }

  get users(): UserProps[] {
    return this.UsersData;
  }
}

const usersDataStore = new UsersDataStore();

export default usersDataStore;

import { OneToMany } from "./decorators.js";
import { User } from "./user.js";

export class Building {
  @OneToMany(Building)
  residents!: User[];
}

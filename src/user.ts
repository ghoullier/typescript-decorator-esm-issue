import { Building } from "./building.js";
import { ManyToOne } from "./decorators.js";

export class User {
  @ManyToOne(Building)
  house!: Building;
}

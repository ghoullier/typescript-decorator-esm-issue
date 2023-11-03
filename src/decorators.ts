export function OneToMany(entity: object) {
  return function $OneToMany(target: Object, propertyKey: string): void {};
}

export function ManyToOne(entity: object) {
  return function $ManyToOne(target: Object, propertyKey: string): void {};
}

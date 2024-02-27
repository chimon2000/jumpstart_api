import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Health {
  @Field()
  public version: string

  constructor(version: string) {
    this.version = version
  }
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_TaskInput } from "../inputs/UserCreateWithoutFK_TaskInput";
import { UserUpdateWithoutFK_TaskInput } from "../inputs/UserUpdateWithoutFK_TaskInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_TaskInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_TaskInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_TaskInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TaskInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_TaskInput;
}

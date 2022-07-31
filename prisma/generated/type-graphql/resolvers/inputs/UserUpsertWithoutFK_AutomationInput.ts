import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_AutomationInput } from "../inputs/UserCreateWithoutFK_AutomationInput";
import { UserUpdateWithoutFK_AutomationInput } from "../inputs/UserUpdateWithoutFK_AutomationInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_AutomationInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_AutomationInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_AutomationInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_AutomationInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_AutomationInput;
}

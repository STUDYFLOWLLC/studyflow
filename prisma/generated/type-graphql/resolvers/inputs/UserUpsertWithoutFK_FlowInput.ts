import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowInput } from "../inputs/UserCreateWithoutFK_FlowInput";
import { UserUpdateWithoutFK_FlowInput } from "../inputs/UserUpdateWithoutFK_FlowInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FlowInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FlowInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowInput;
}

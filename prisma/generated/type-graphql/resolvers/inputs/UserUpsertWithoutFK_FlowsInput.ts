import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowsInput } from "../inputs/UserCreateWithoutFK_FlowsInput";
import { UserUpdateWithoutFK_FlowsInput } from "../inputs/UserUpdateWithoutFK_FlowsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FlowsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FlowsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowsInput;
}

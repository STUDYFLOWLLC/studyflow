import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFlowsInput } from "../inputs/UserCreateWithoutFlowsInput";
import { UserUpdateWithoutFlowsInput } from "../inputs/UserUpdateWithoutFlowsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFlowsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFlowsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFlowsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFlowsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFlowsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFlowsInput;
}

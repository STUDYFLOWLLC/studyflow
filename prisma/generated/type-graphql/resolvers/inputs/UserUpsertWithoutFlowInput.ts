import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFlowInput } from "../inputs/UserCreateWithoutFlowInput";
import { UserUpdateWithoutFlowInput } from "../inputs/UserUpdateWithoutFlowInput";

@TypeGraphQL.InputType("UserUpsertWithoutFlowInput", {
  isAbstract: true
})
export class UserUpsertWithoutFlowInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFlowInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFlowInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFlowInput, {
    nullable: false
  })
  create!: UserCreateWithoutFlowInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowViewInput } from "../inputs/UserCreateWithoutFK_FlowViewInput";
import { UserUpdateWithoutFK_FlowViewInput } from "../inputs/UserUpdateWithoutFK_FlowViewInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowViewInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_FlowViewInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowViewInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowViewInput;
}

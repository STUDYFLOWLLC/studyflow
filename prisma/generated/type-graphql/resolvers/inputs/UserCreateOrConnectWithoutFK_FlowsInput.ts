import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowsInput } from "../inputs/UserCreateWithoutFK_FlowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FlowsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowsInput;
}

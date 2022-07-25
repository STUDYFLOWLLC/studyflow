import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_AutomationInput } from "../inputs/UserCreateWithoutFK_AutomationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_AutomationInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_AutomationInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_AutomationInput;
}

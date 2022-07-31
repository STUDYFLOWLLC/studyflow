import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_AutomationInput } from "../inputs/UserCreateOrConnectWithoutFK_AutomationInput";
import { UserCreateWithoutFK_AutomationInput } from "../inputs/UserCreateWithoutFK_AutomationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_AutomationInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_AutomationInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_AutomationInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_AutomationInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_AutomationInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

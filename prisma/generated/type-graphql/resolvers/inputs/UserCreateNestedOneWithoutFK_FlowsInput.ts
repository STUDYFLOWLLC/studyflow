import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowsInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowsInput";
import { UserCreateWithoutFK_FlowsInput } from "../inputs/UserCreateWithoutFK_FlowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FlowsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

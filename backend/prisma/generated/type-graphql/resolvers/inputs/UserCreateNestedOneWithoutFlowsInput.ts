import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFlowsInput } from "../inputs/UserCreateOrConnectWithoutFlowsInput";
import { UserCreateWithoutFlowsInput } from "../inputs/UserCreateWithoutFlowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFlowsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFlowsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFlowsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFlowsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

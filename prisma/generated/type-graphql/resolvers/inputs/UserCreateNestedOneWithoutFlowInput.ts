import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFlowInput } from "../inputs/UserCreateOrConnectWithoutFlowInput";
import { UserCreateWithoutFlowInput } from "../inputs/UserCreateWithoutFlowInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFlowInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFlowInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFlowInput, {
    nullable: true
  })
  create?: UserCreateWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFlowInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

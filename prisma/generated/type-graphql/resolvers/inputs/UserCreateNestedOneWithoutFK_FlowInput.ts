import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowInput";
import { UserCreateWithoutFK_FlowInput } from "../inputs/UserCreateWithoutFK_FlowInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FlowInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

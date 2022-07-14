import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowViewInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowViewInput";
import { UserCreateWithoutFK_FlowViewInput } from "../inputs/UserCreateWithoutFK_FlowViewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowViewInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowViewInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

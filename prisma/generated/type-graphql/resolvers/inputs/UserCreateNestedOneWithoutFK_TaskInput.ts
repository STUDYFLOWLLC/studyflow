import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_TaskInput } from "../inputs/UserCreateOrConnectWithoutFK_TaskInput";
import { UserCreateWithoutFK_TaskInput } from "../inputs/UserCreateWithoutFK_TaskInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_TaskInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TaskInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_TaskInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

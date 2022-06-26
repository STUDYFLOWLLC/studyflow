import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_TaskInput } from "../inputs/UserCreateWithoutFK_TaskInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_TaskInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TaskInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_TaskInput;
}

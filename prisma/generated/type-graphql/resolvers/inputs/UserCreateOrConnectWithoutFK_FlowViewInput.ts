import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowViewInput } from "../inputs/UserCreateWithoutFK_FlowViewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowViewInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowViewInput;
}

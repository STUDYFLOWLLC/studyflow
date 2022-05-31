import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_FlowTagsInput } from "../inputs/UserCreateWithoutFK_FlowTagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_FlowTagsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_FlowTagsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowTagsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_FlowTagsInput;
}

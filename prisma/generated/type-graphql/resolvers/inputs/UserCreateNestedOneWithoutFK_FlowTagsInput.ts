import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowTagsInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowTagsInput";
import { UserCreateWithoutFK_FlowTagsInput } from "../inputs/UserCreateWithoutFK_FlowTagsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_FlowTagsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_FlowTagsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowTagsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowTagsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowTagsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

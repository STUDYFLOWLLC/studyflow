import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_StudyGroupsInput } from "../inputs/UserCreateOrConnectWithoutFK_StudyGroupsInput";
import { UserCreateWithoutFK_StudyGroupsInput } from "../inputs/UserCreateWithoutFK_StudyGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_StudyGroupsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_StudyGroupsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_StudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_StudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

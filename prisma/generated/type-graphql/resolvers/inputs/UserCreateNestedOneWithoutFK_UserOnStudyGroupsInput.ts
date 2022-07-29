import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput";
import { UserCreateWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateWithoutFK_UserOnStudyGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_UserOnStudyGroupsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_UserOnStudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}

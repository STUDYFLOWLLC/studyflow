import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateWithoutFK_UserOnStudyGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_UserOnStudyGroupsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_UserOnStudyGroupsInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateWithoutFK_UserOnStudyGroupsInput";
import { UserUpdateWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserUpdateWithoutFK_UserOnStudyGroupsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_UserOnStudyGroupsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_UserOnStudyGroupsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_UserOnStudyGroupsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_UserOnStudyGroupsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_UserOnStudyGroupsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_UserOnStudyGroupsInput;
}

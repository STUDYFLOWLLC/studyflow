import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_StudyGroupsInput } from "../inputs/UserCreateWithoutFK_StudyGroupsInput";
import { UserUpdateWithoutFK_StudyGroupsInput } from "../inputs/UserUpdateWithoutFK_StudyGroupsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_StudyGroupsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_StudyGroupsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_StudyGroupsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_StudyGroupsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_StudyGroupsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_StudyGroupsInput;
}

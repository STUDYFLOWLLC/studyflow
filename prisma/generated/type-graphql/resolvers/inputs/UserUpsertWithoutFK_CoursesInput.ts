import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_CoursesInput } from "../inputs/UserCreateWithoutFK_CoursesInput";
import { UserUpdateWithoutFK_CoursesInput } from "../inputs/UserUpdateWithoutFK_CoursesInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_CoursesInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_CoursesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_CoursesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_CoursesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_CoursesInput;
}

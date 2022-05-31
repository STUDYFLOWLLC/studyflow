import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneWithoutFK_UsersInput } from "../inputs/CourseUpdateOneWithoutFK_UsersInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_CoursesInput } from "../inputs/UserUpdateOneWithoutFK_CoursesInput";

@TypeGraphQL.InputType("CourseOnUserUpdateInput", {
  isAbstract: true
})
export class CourseOnUserUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HOLDER?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneWithoutFK_UsersInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneWithoutFK_UsersInput | undefined;
}

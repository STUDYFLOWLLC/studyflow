import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneWithoutFK_UsersInput } from "../inputs/CourseUpdateOneWithoutFK_UsersInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnUserUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HOLDER?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneWithoutFK_UsersInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneWithoutFK_UsersInput | undefined;
}

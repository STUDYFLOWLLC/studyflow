import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_CoursesInput } from "../inputs/UserUpdateOneWithoutFK_CoursesInput";

@TypeGraphQL.InputType("CourseOnUserUpdateWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserUpdateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HOLDER?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_CoursesInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateManyWithoutFK_ProfessorInput } from "../inputs/CourseUpdateManyWithoutFK_ProfessorInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProfessorUpdateWithoutFK_SchoolInput", {
  isAbstract: true
})
export class ProfessorUpdateWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => CourseUpdateManyWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_Courses?: CourseUpdateManyWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Email?: NullableStringFieldUpdateOperationsInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateManyWithoutFK_ProfessorInput } from "../inputs/CourseUpdateManyWithoutFK_ProfessorInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutFK_ProfessorInput } from "../inputs/SchoolUpdateOneWithoutFK_ProfessorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProfessorUpdateInput", {
  isAbstract: true
})
export class ProfessorUpdateInput {
  @TypeGraphQL.Field(_type => CourseUpdateManyWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_Courses?: CourseUpdateManyWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Email?: NullableStringFieldUpdateOperationsInput | undefined;
}

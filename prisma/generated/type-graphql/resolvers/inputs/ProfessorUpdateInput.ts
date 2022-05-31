import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneWithoutFK_ProfessorsInput } from "../inputs/CourseUpdateOneWithoutFK_ProfessorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProfessorUpdateInput", {
  isAbstract: true
})
export class ProfessorUpdateInput {
  @TypeGraphQL.Field(_type => CourseUpdateOneWithoutFK_ProfessorsInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneWithoutFK_ProfessorsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;
}

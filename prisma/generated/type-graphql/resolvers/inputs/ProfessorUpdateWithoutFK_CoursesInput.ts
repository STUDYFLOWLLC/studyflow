import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutFK_ProfessorInput } from "../inputs/SchoolUpdateOneWithoutFK_ProfessorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProfessorUpdateWithoutFK_CoursesInput", {
  isAbstract: true
})
export class ProfessorUpdateWithoutFK_CoursesInput {
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

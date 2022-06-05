import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseUpdateManyWithoutFK_SchoolInput } from "../inputs/CourseUpdateManyWithoutFK_SchoolInput";
import { NullableEnumTermTypeFieldUpdateOperationsInput } from "../inputs/NullableEnumTermTypeFieldUpdateOperationsInput";
import { ProfessorUpdateManyWithoutFK_SchoolInput } from "../inputs/ProfessorUpdateManyWithoutFK_SchoolInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SchoolUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class SchoolUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  HasClassSupport?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumTermTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  TermType?: NullableEnumTermTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateManyWithoutFK_SchoolInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateManyWithoutFK_SchoolInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateManyWithoutFK_SchoolInput, {
    nullable: true
  })
  FK_Professor?: ProfessorUpdateManyWithoutFK_SchoolInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfessorUpdateManyWithoutFK_CourseInput } from "../inputs/ProfessorUpdateManyWithoutFK_CourseInput";
import { SchoolUpdateOneWithoutFK_CourseInput } from "../inputs/SchoolUpdateOneWithoutFK_CourseInput";

@TypeGraphQL.InputType("CourseUpdateWithoutFK_UsersInput", {
  isAbstract: true
})
export class CourseUpdateWithoutFK_UsersInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_CourseInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateManyWithoutFK_CourseInput, {
    nullable: true
  })
  FK_Professors?: ProfessorUpdateManyWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  IsOfficial?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Term?: NullableStringFieldUpdateOperationsInput | undefined;
}

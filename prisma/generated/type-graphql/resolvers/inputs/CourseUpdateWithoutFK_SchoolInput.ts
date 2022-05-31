import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseOnUserUpdateManyWithoutFK_CourseInput } from "../inputs/CourseOnUserUpdateManyWithoutFK_CourseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProfessorUpdateManyWithoutFK_CourseInput } from "../inputs/ProfessorUpdateManyWithoutFK_CourseInput";

@TypeGraphQL.InputType("CourseUpdateWithoutFK_SchoolInput", {
  isAbstract: true
})
export class CourseUpdateWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorUpdateManyWithoutFK_CourseInput, {
    nullable: true
  })
  FK_Professors?: ProfessorUpdateManyWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserUpdateManyWithoutFK_CourseInput, {
    nullable: true
  })
  FK_Users?: CourseOnUserUpdateManyWithoutFK_CourseInput | undefined;

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

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseOnTermUpdateManyWithoutFK_CourseInput } from "../inputs/CourseOnTermUpdateManyWithoutFK_CourseInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SchoolUpdateOneWithoutFK_CourseInput } from "../inputs/SchoolUpdateOneWithoutFK_CourseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseUpdateWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class CourseUpdateWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  IsOfficial?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Term?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SchoolUpdateOneWithoutFK_CourseInput, {
    nullable: true
  })
  FK_School?: SchoolUpdateOneWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateManyWithoutFK_CourseInput, {
    nullable: true
  })
  CourseOnTerm?: CourseOnTermUpdateManyWithoutFK_CourseInput | undefined;
}

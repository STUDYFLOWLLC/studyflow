import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateOneWithoutCourseOnTermInput } from "../inputs/CourseUpdateOneWithoutCourseOnTermInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateManyWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateManyWithoutFK_CourseOnTermInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutFK_CourseOnTermInput } from "../inputs/TaskUpdateManyWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermUpdateWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermUpdateWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  Index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Color?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Nickname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateOneWithoutCourseOnTermInput, {
    nullable: true
  })
  FK_Course?: CourseUpdateOneWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowUpdateManyWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Tasks?: TaskUpdateManyWithoutFK_CourseOnTermInput | undefined;
}
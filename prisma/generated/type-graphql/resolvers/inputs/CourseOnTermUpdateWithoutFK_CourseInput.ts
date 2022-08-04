import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseOnTermAutomationUpdateManyWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationUpdateManyWithoutFK_CourseOnTermInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateManyWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateManyWithoutFK_CourseOnTermInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutFK_CourseOnTermInput } from "../inputs/TaskUpdateManyWithoutFK_CourseOnTermInput";
import { TermUpdateOneWithoutFK_CourseOnTermInput } from "../inputs/TermUpdateOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermUpdateWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnTermUpdateWithoutFK_CourseInput {
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

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  IsNew?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TermUpdateOneWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Term?: TermUpdateOneWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowUpdateManyWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Tasks?: TaskUpdateManyWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  CourseOnTermAutomation?: CourseOnTermAutomationUpdateManyWithoutFK_CourseOnTermInput | undefined;
}

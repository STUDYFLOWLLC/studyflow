import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermUpdateOneWithoutFK_FlowsInput } from "../inputs/CourseOnTermUpdateOneWithoutFK_FlowsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumFlowTypeFieldUpdateOperationsInput } from "../inputs/EnumFlowTypeFieldUpdateOperationsInput";
import { EnumVisibilityFieldUpdateOperationsInput } from "../inputs/EnumVisibilityFieldUpdateOperationsInput";
import { FlashCardStackUpdateManyWithoutFK_FlowInput } from "../inputs/FlashCardStackUpdateManyWithoutFK_FlowInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlowUpdateWithoutFK_TasksInput", {
  isAbstract: true
})
export class FlowUpdateWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlowID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  Type?: EnumFlowTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Body?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  Visibility?: EnumVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateOneWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackUpdateManyWithoutFK_FlowInput | undefined;
}

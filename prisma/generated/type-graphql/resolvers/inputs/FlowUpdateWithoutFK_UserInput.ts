import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseOnTermUpdateOneWithoutFK_FlowsInput } from "../inputs/CourseOnTermUpdateOneWithoutFK_FlowsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumFlowTypeFieldUpdateOperationsInput } from "../inputs/EnumFlowTypeFieldUpdateOperationsInput";
import { EnumVisibilityFieldUpdateOperationsInput } from "../inputs/EnumVisibilityFieldUpdateOperationsInput";
import { FlashcardStackUpdateManyWithoutFK_FlowInput } from "../inputs/FlashcardStackUpdateManyWithoutFK_FlowInput";
import { FlowViewUpdateManyWithoutFK_FlowInput } from "../inputs/FlowViewUpdateManyWithoutFK_FlowInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutFK_FlowInput } from "../inputs/TaskUpdateManyWithoutFK_FlowInput";

@TypeGraphQL.InputType("FlowUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlowID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  LastOpened?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  UserEnteredDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  Type?: EnumFlowTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  Trashed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  Visibility?: EnumVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  WasAutomated?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Body?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  DeletedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermUpdateOneWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlashcardStacks?: FlashcardStackUpdateManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_Tasks?: TaskUpdateManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewUpdateManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewUpdateManyWithoutFK_FlowInput | undefined;
}

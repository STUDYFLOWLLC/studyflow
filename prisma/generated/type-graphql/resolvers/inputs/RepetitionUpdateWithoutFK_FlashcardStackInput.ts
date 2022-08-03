import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRepetitionTypeFieldUpdateOperationsInput } from "../inputs/EnumRepetitionTypeFieldUpdateOperationsInput";
import { FlowUpdateOneWithoutFK_RepetitionInput } from "../inputs/FlowUpdateOneWithoutFK_RepetitionInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutFK_RepetitionInput } from "../inputs/TaskUpdateManyWithoutFK_RepetitionInput";

@TypeGraphQL.InputType("RepetitionUpdateWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class RepetitionUpdateWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  RepetitionID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  DeletedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRepetitionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  RepetitionType?: EnumRepetitionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_Tasks?: TaskUpdateManyWithoutFK_RepetitionInput | undefined;
}

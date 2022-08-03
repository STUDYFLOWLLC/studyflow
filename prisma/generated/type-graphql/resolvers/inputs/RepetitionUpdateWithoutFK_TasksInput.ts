import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRepetitionTypeFieldUpdateOperationsInput } from "../inputs/EnumRepetitionTypeFieldUpdateOperationsInput";
import { FlashcardStackUpdateOneWithoutFK_RepetitionInput } from "../inputs/FlashcardStackUpdateOneWithoutFK_RepetitionInput";
import { FlowUpdateOneWithoutRepetitionInput } from "../inputs/FlowUpdateOneWithoutRepetitionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RepetitionUpdateWithoutFK_TasksInput", {
  isAbstract: true
})
export class RepetitionUpdateWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  RepetitionID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRepetitionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  RepetitionType?: EnumRepetitionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutRepetitionInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateOneWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackUpdateOneWithoutFK_RepetitionInput | undefined;
}

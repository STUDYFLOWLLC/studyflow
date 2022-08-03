import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateOneWithoutRepetitionInput } from "../inputs/FlowUpdateOneWithoutRepetitionInput";
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

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutRepetitionInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_Tasks?: TaskUpdateManyWithoutFK_RepetitionInput | undefined;
}

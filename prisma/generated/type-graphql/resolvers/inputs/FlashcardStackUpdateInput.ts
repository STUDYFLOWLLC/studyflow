import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashcardStackReviewUpdateManyWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewUpdateManyWithoutFK_FlashcardStackInput";
import { FlashcardUpdateManyWithoutFK_FlashcardStackInput } from "../inputs/FlashcardUpdateManyWithoutFK_FlashcardStackInput";
import { FlowUpdateOneWithoutFK_FlashcardStacksInput } from "../inputs/FlowUpdateOneWithoutFK_FlashcardStacksInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { RepetitionUpdateOneWithoutFK_FlashcardStackInput } from "../inputs/RepetitionUpdateOneWithoutFK_FlashcardStackInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardStackUpdateInput", {
  isAbstract: true
})
export class FlashcardStackUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlashcardStackID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  DeletedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardUpdateManyWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  FK_Flashcards?: FlashcardUpdateManyWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateManyWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  FK_FlashcardStackReviews?: FlashcardStackReviewUpdateManyWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionUpdateOneWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  FK_Repetition?: RepetitionUpdateOneWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Description?: StringFieldUpdateOperationsInput | undefined;
}

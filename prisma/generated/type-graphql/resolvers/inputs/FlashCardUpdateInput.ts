import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashcardReviewUpdateManyWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewUpdateManyWithoutFK_FlashcardInput";
import { FlashcardStackUpdateOneWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackUpdateOneWithoutFK_FlashcardsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardUpdateInput", {
  isAbstract: true
})
export class FlashcardUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlashcardID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  DeletedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateOneWithoutFK_FlashcardsInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackUpdateOneWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  Position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Front?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Back?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateManyWithoutFK_FlashcardInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewUpdateManyWithoutFK_FlashcardInput | undefined;
}

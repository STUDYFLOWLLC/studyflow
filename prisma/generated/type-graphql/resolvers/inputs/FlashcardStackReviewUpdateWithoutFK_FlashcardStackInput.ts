import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlashcardStackReviewID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  EndTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput | undefined;
}

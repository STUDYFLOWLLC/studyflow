import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput";
import { FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateInput {
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

  @TypeGraphQL.Field(_type => FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewUpdateManyWithoutFK_FlashcardStackReviewInput | undefined;
}

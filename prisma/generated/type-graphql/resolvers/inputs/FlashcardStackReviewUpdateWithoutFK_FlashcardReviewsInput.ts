import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput {
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
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumFlashcardStatusFieldUpdateOperationsInput } from "../inputs/EnumFlashcardStatusFieldUpdateOperationsInput";
import { FlashcardStackReviewUpdateOneWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewUpdateOneWithoutFK_FlashcardReviewsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlashcardReviewID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFlashcardStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  Status?: EnumFlashcardStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateOneWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  FK_FlashcardStackReview?: FlashcardStackReviewUpdateOneWithoutFK_FlashcardReviewsInput | undefined;
}

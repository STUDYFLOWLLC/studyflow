import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumFlashcardStatusFieldUpdateOperationsInput } from "../inputs/EnumFlashcardStatusFieldUpdateOperationsInput";
import { FlashcardUpdateOneWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardUpdateOneWithoutFK_FlashcardReviewsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FlashcardReviewID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardUpdateOneWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  FK_Flashcard?: FlashcardUpdateOneWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFlashcardStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  Status?: EnumFlashcardStatusFieldUpdateOperationsInput | undefined;
}

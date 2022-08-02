import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateNestedOneWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateNestedOneWithoutFK_FlashcardReviewsInput";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.InputType("FlashcardReviewCreateInput", {
  isAbstract: true
})
export class FlashcardReviewCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardReviewID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashcardCreateNestedOneWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  FK_Flashcard?: FlashcardCreateNestedOneWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: true
  })
  Status?: "NEUTRAL" | "CORRECT" | "INCORRECT" | undefined;
}

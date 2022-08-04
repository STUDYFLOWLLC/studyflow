import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateNestedOneWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateNestedOneWithoutFK_FlashcardReviewsInput";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.InputType("FlashcardReviewCreateWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewCreateWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardReviewID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: true
  })
  Status?: "NEUTRAL" | "CORRECT" | "INCORRECT" | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateNestedOneWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  FK_FlashcardStackReview?: FlashcardStackReviewCreateNestedOneWithoutFK_FlashcardReviewsInput | undefined;
}

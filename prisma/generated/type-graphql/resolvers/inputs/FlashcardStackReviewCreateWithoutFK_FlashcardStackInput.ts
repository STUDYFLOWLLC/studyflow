import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackReviewID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  EndTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput";
import { FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateInput {
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

  @TypeGraphQL.Field(_type => FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput | undefined;
}

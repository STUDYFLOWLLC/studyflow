import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewOrderByWithAggregationInput } from "../../../inputs/FlashcardReviewOrderByWithAggregationInput";
import { FlashcardReviewScalarWhereWithAggregatesInput } from "../../../inputs/FlashcardReviewScalarWhereWithAggregatesInput";
import { FlashcardReviewWhereInput } from "../../../inputs/FlashcardReviewWhereInput";
import { FlashcardReviewScalarFieldEnum } from "../../../../enums/FlashcardReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlashcardReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlashcardReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlashcardReviewID" | "CreatedTime" | "Status" | "FK_FlashcardID" | "FK_FlashcardStackReviewID">;

  @TypeGraphQL.Field(_type => FlashcardReviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlashcardReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

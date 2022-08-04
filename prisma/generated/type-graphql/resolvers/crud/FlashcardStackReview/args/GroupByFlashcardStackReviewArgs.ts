import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewOrderByWithAggregationInput } from "../../../inputs/FlashcardStackReviewOrderByWithAggregationInput";
import { FlashcardStackReviewScalarWhereWithAggregatesInput } from "../../../inputs/FlashcardStackReviewScalarWhereWithAggregatesInput";
import { FlashcardStackReviewWhereInput } from "../../../inputs/FlashcardStackReviewWhereInput";
import { FlashcardStackReviewScalarFieldEnum } from "../../../../enums/FlashcardStackReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardStackReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlashcardStackReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlashcardStackReviewID" | "CreatedTime" | "EndTime" | "FK_FlashcardStackID">;

  @TypeGraphQL.Field(_type => FlashcardStackReviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlashcardStackReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

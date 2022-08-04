import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardReviewOrderByWithRelationInput } from "../../../inputs/FlashcardReviewOrderByWithRelationInput";
import { FlashcardReviewWhereInput } from "../../../inputs/FlashcardReviewWhereInput";
import { FlashcardReviewWhereUniqueInput } from "../../../inputs/FlashcardReviewWhereUniqueInput";
import { FlashcardReviewScalarFieldEnum } from "../../../../enums/FlashcardReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FlashcardStackReviewFK_FlashcardReviewsArgs {
  @TypeGraphQL.Field(_type => FlashcardReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlashcardReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlashcardReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"FlashcardReviewID" | "CreatedTime" | "Status" | "FK_FlashcardID" | "FK_FlashcardStackReviewID"> | undefined;
}

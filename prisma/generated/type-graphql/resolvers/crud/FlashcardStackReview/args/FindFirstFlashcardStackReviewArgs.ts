import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackReviewOrderByWithRelationInput } from "../../../inputs/FlashcardStackReviewOrderByWithRelationInput";
import { FlashcardStackReviewWhereInput } from "../../../inputs/FlashcardStackReviewWhereInput";
import { FlashcardStackReviewWhereUniqueInput } from "../../../inputs/FlashcardStackReviewWhereUniqueInput";
import { FlashcardStackReviewScalarFieldEnum } from "../../../../enums/FlashcardStackReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFlashcardStackReviewArgs {
  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereInput, {
    nullable: true
  })
  where?: FlashcardStackReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlashcardStackReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlashcardStackReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"FlashcardStackReviewID" | "CreatedTime" | "EndTime" | "FK_FlashcardStackID"> | undefined;
}

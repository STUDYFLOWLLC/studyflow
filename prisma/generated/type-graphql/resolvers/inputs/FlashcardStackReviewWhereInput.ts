import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FlashcardReviewListRelationFilter } from "../inputs/FlashcardReviewListRelationFilter";
import { FlashcardStackRelationFilter } from "../inputs/FlashcardStackRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardStackReviewWhereInput", {
  isAbstract: true
})
export class FlashcardStackReviewWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereInput], {
    nullable: true
  })
  AND?: FlashcardStackReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereInput], {
    nullable: true
  })
  OR?: FlashcardStackReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereInput], {
    nullable: true
  })
  NOT?: FlashcardStackReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlashcardStackReviewID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  EndTime?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackRelationFilter, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewListRelationFilter, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewListRelationFilter | undefined;
}

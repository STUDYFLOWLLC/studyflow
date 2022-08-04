import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FlashcardReviewListRelationFilter } from "../inputs/FlashcardReviewListRelationFilter";
import { FlashcardStackRelationFilter } from "../inputs/FlashcardStackRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardWhereInput", {
  isAbstract: true
})
export class FlashcardWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardWhereInput], {
    nullable: true
  })
  AND?: FlashcardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereInput], {
    nullable: true
  })
  OR?: FlashcardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereInput], {
    nullable: true
  })
  NOT?: FlashcardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlashcardID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackRelationFilter, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Front?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FrontImageUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Back?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  BackImageUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewListRelationFilter, {
    nullable: true
  })
  FK_FlashcardReviews?: FlashcardReviewListRelationFilter | undefined;
}

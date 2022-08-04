import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FlashcardListRelationFilter } from "../inputs/FlashcardListRelationFilter";
import { FlashcardStackReviewListRelationFilter } from "../inputs/FlashcardStackReviewListRelationFilter";
import { FlowRelationFilter } from "../inputs/FlowRelationFilter";
import { RepetitionRelationFilter } from "../inputs/RepetitionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardStackWhereInput", {
  isAbstract: true
})
export class FlashcardStackWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardStackWhereInput], {
    nullable: true
  })
  AND?: FlashcardStackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereInput], {
    nullable: true
  })
  OR?: FlashcardStackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereInput], {
    nullable: true
  })
  NOT?: FlashcardStackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlashcardStackID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlowRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardListRelationFilter, {
    nullable: true
  })
  FK_Flashcards?: FlashcardListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewListRelationFilter, {
    nullable: true
  })
  FK_FlashcardStackReviews?: FlashcardStackReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RepetitionRelationFilter, {
    nullable: true
  })
  FK_Repetition?: RepetitionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Description?: StringFilter | undefined;
}

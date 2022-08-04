import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumFlashcardStatusWithAggregatesFilter } from "../inputs/EnumFlashcardStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FlashcardReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlashcardReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlashcardReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlashcardReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlashcardReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FlashcardReviewID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlashcardStatusWithAggregatesFilter, {
    nullable: true
  })
  Status?: EnumFlashcardStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlashcardID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlashcardStackReviewID?: StringNullableWithAggregatesFilter | undefined;
}

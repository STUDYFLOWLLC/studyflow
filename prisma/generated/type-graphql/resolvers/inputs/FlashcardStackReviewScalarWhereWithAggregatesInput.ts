import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FlashcardStackReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlashcardStackReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlashcardStackReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlashcardStackReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlashcardStackReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FlashcardStackReviewID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  EndTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableWithAggregatesFilter | undefined;
}

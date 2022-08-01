import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumFlashcardStatusFilter } from "../inputs/EnumFlashcardStatusFilter";
import { FlashcardRelationFilter } from "../inputs/FlashcardRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardReviewWhereInput", {
  isAbstract: true
})
export class FlashcardReviewWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewWhereInput], {
    nullable: true
  })
  AND?: FlashcardReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereInput], {
    nullable: true
  })
  OR?: FlashcardReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereInput], {
    nullable: true
  })
  NOT?: FlashcardReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlashcardReviewID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardRelationFilter, {
    nullable: true
  })
  FK_Flashcard?: FlashcardRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlashcardStatusFilter, {
    nullable: true
  })
  Status?: EnumFlashcardStatusFilter | undefined;
}

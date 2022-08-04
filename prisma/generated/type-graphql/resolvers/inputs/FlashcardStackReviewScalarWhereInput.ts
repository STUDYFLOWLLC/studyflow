import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardStackReviewScalarWhereInput", {
  isAbstract: true
})
export class FlashcardStackReviewScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereInput], {
    nullable: true
  })
  AND?: FlashcardStackReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereInput], {
    nullable: true
  })
  OR?: FlashcardStackReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereInput], {
    nullable: true
  })
  NOT?: FlashcardStackReviewScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableFilter | undefined;
}

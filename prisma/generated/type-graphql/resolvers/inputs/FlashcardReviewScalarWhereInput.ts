import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumFlashcardStatusFilter } from "../inputs/EnumFlashcardStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardReviewScalarWhereInput", {
  isAbstract: true
})
export class FlashcardReviewScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereInput], {
    nullable: true
  })
  AND?: FlashcardReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereInput], {
    nullable: true
  })
  OR?: FlashcardReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewScalarWhereInput], {
    nullable: true
  })
  NOT?: FlashcardReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlashcardReviewID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlashcardStatusFilter, {
    nullable: true
  })
  Status?: EnumFlashcardStatusFilter | undefined;
}

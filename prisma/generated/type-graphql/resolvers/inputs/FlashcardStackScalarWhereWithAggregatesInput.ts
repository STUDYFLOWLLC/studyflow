import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FlashcardStackScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlashcardStackScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlashcardStackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlashcardStackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlashcardStackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FlashcardStackID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Description?: StringWithAggregatesFilter | undefined;
}

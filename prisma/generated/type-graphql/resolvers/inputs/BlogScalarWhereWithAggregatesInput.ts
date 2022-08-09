import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BlogScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BlogScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BlogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BlogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BlogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BlogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  BlogID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Body?: StringWithAggregatesFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTermTypeWithAggregatesFilter } from "../inputs/EnumTermTypeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("TermScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TermScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  TermID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTermTypeWithAggregatesFilter, {
    nullable: true
  })
  TermType?: EnumTermTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  TermName?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableWithAggregatesFilter | undefined;
}

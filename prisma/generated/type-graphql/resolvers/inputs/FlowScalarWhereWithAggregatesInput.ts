import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumVisibilityNullableWithAggregatesFilter } from "../inputs/EnumVisibilityNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("FlowScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlowScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FlowID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Body?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityNullableWithAggregatesFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableWithAggregatesFilter | undefined;
}

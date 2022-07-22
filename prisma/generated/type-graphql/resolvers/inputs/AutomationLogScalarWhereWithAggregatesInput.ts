import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AutomationLogScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AutomationLogScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AutomationLogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AutomationLogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AutomationLogScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  AutomationLogID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  Time?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  Success?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FileID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: IntWithAggregatesFilter | undefined;
}

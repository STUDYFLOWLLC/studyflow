import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFlowTypeWithAggregatesFilter } from "../inputs/EnumFlowTypeWithAggregatesFilter";
import { EnumVisibilityWithAggregatesFilter } from "../inputs/EnumVisibilityWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CourseOnTermAutomationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CourseOnTermAutomationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CourseOnTermAutomationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CourseOnTermAutomationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CourseOnTermAutomationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  CourseOnTermAutomationID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FolderID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeWithAggregatesFilter, {
    nullable: true
  })
  DefaultType?: EnumFlowTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityWithAggregatesFilter, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_AutomationID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableWithAggregatesFilter | undefined;
}

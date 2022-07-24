import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogListRelationFilter } from "../inputs/AutomationLogListRelationFilter";
import { AutomationRelationFilter } from "../inputs/AutomationRelationFilter";
import { CourseOnTermRelationFilter } from "../inputs/CourseOnTermRelationFilter";
import { EnumFlowTypeFilter } from "../inputs/EnumFlowTypeFilter";
import { EnumVisibilityFilter } from "../inputs/EnumVisibilityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CourseOnTermAutomationWhereInput", {
  isAbstract: true
})
export class CourseOnTermAutomationWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereInput], {
    nullable: true
  })
  AND?: CourseOnTermAutomationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereInput], {
    nullable: true
  })
  OR?: CourseOnTermAutomationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereInput], {
    nullable: true
  })
  NOT?: CourseOnTermAutomationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseOnTermAutomationID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FolderID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFilter, {
    nullable: true
  })
  DefaultType?: EnumFlowTypeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFilter, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => AutomationLogListRelationFilter, {
    nullable: true
  })
  AutomationLog?: AutomationLogListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AutomationRelationFilter, {
    nullable: true
  })
  FK_Automation?: AutomationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_AutomationID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermRelationFilter, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFlowTypeFilter } from "../inputs/EnumFlowTypeFilter";
import { EnumVisibilityFilter } from "../inputs/EnumVisibilityFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CourseOnTermAutomationScalarWhereInput", {
  isAbstract: true
})
export class CourseOnTermAutomationScalarWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereInput], {
    nullable: true
  })
  AND?: CourseOnTermAutomationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereInput], {
    nullable: true
  })
  OR?: CourseOnTermAutomationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationScalarWhereInput], {
    nullable: true
  })
  NOT?: CourseOnTermAutomationScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_AutomationID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseOnTermAutomationRelationFilter } from "../inputs/CourseOnTermAutomationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AutomationLogWhereInput", {
  isAbstract: true
})
export class AutomationLogWhereInput {
  @TypeGraphQL.Field(_type => [AutomationLogWhereInput], {
    nullable: true
  })
  AND?: AutomationLogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereInput], {
    nullable: true
  })
  OR?: AutomationLogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogWhereInput], {
    nullable: true
  })
  NOT?: AutomationLogWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  AutomationLogID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  Time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Success?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Message?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationRelationFilter, {
    nullable: true
  })
  FK_CourseOnTermAutomation?: CourseOnTermAutomationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: IntFilter | undefined;
}

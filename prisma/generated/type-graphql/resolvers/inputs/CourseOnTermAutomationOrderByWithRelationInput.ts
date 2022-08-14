import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogOrderByRelationAggregateInput } from "../inputs/AutomationLogOrderByRelationAggregateInput";
import { AutomationOrderByWithRelationInput } from "../inputs/AutomationOrderByWithRelationInput";
import { CourseOnTermOrderByWithRelationInput } from "../inputs/CourseOnTermOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOnTermAutomationOrderByWithRelationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseOnTermAutomationID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FolderID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultVisibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultRepetitionType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AutomationLogOrderByRelationAggregateInput, {
    nullable: true
  })
  AutomationLog?: AutomationLogOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AutomationOrderByWithRelationInput, {
    nullable: true
  })
  FK_Automation?: AutomationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_AutomationID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermOrderByWithRelationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseOnTermID?: "asc" | "desc" | undefined;
}

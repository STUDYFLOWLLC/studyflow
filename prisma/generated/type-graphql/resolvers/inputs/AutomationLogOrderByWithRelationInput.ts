import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationOrderByWithRelationInput } from "../inputs/CourseOnTermAutomationOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AutomationLogOrderByWithRelationInput", {
  isAbstract: true
})
export class AutomationLogOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  AutomationLogID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Success?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Message?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationOrderByWithRelationInput, {
    nullable: true
  })
  FK_CourseOnTermAutomation?: CourseOnTermAutomationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: "asc" | "desc" | undefined;
}

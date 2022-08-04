import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("CourseOnTermAutomationMinAggregate", {
  isAbstract: true
})
export class CourseOnTermAutomationMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseOnTermAutomationID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID!: string | null;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  DefaultType!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS" | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_AutomationID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID!: number | null;
}

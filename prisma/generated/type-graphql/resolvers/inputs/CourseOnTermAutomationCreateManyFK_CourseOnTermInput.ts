import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateManyFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateManyFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CourseOnTermAutomationID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FolderID?: string | undefined;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  DefaultType?: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS" | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: false
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_AutomationID?: number | undefined;
}

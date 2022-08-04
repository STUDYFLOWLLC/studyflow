import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Automation } from "../models/Automation";
import { AutomationLog } from "../models/AutomationLog";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { FlowType } from "../enums/FlowType";
import { Visibility } from "../enums/Visibility";
import { CourseOnTermAutomationCount } from "../resolvers/outputs/CourseOnTermAutomationCount";

@TypeGraphQL.ObjectType("CourseOnTermAutomation", {
  isAbstract: true
})
export class CourseOnTermAutomation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CourseOnTermAutomationID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FolderID!: string;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: false
  })
  DefaultType!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS";

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: false
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC";

  AutomationLog?: AutomationLog[];

  FK_Automation?: Automation | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_AutomationID?: number | null;

  FK_CourseOnTerm?: CourseOnTerm | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID?: number | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCount, {
    nullable: true
  })
  _count?: CourseOnTermAutomationCount | null;
}

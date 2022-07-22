import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Automation } from "../models/Automation";
import { CourseOnTerm } from "../models/CourseOnTerm";

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
}

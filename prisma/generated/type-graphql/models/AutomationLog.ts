import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTermAutomation } from "../models/CourseOnTermAutomation";

@TypeGraphQL.ObjectType("AutomationLog", {
  isAbstract: true
})
export class AutomationLog {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  AutomationLogID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  Time!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Success!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Message!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FileID?: string | null;

  FK_CourseOnTermAutomation?: CourseOnTermAutomation | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: number | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";
import { RepetitionType } from "../../enums/RepetitionType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("CourseOnTermAutomationMaxAggregate", {
  isAbstract: true
})
export class CourseOnTermAutomationMaxAggregate {
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

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  DefaultRepetitionType!: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_AutomationID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID!: number | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationAvgAggregate } from "../outputs/CourseOnTermAutomationAvgAggregate";
import { CourseOnTermAutomationCountAggregate } from "../outputs/CourseOnTermAutomationCountAggregate";
import { CourseOnTermAutomationMaxAggregate } from "../outputs/CourseOnTermAutomationMaxAggregate";
import { CourseOnTermAutomationMinAggregate } from "../outputs/CourseOnTermAutomationMinAggregate";
import { CourseOnTermAutomationSumAggregate } from "../outputs/CourseOnTermAutomationSumAggregate";
import { FlowType } from "../../enums/FlowType";
import { RepetitionType } from "../../enums/RepetitionType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("CourseOnTermAutomationGroupBy", {
  isAbstract: true
})
export class CourseOnTermAutomationGroupBy {
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

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: false
  })
  DefaultRepetitionType!: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_AutomationID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID!: number | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCountAggregate, {
    nullable: true
  })
  _count!: CourseOnTermAutomationCountAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationAvgAggregate, {
    nullable: true
  })
  _avg!: CourseOnTermAutomationAvgAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationSumAggregate, {
    nullable: true
  })
  _sum!: CourseOnTermAutomationSumAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationMinAggregate, {
    nullable: true
  })
  _min!: CourseOnTermAutomationMinAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationMaxAggregate, {
    nullable: true
  })
  _max!: CourseOnTermAutomationMaxAggregate | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput } from "../inputs/AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput";
import { CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput";
import { FlowType } from "../../enums/FlowType";
import { RepetitionType } from "../../enums/RepetitionType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateWithoutFK_AutomationInput {
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

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  DefaultRepetitionType?: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | undefined;

  @TypeGraphQL.Field(_type => AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput, {
    nullable: true
  })
  AutomationLog?: AutomationLogCreateNestedManyWithoutFK_CourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedOneWithoutCourseOnTermAutomationInput | undefined;
}

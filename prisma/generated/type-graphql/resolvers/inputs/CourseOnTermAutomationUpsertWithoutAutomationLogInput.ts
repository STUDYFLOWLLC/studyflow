import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateWithoutAutomationLogInput";
import { CourseOnTermAutomationUpdateWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationUpdateWithoutAutomationLogInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpsertWithoutAutomationLogInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpsertWithoutAutomationLogInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateWithoutAutomationLogInput, {
    nullable: false
  })
  update!: CourseOnTermAutomationUpdateWithoutAutomationLogInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutAutomationLogInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateWithoutAutomationLogInput;
}

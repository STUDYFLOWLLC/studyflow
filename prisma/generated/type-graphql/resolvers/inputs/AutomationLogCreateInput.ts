import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateNestedOneWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateNestedOneWithoutAutomationLogInput";

@TypeGraphQL.InputType("AutomationLogCreateInput", {
  isAbstract: true
})
export class AutomationLogCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  Time?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Success?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Message?: string | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateNestedOneWithoutAutomationLogInput, {
    nullable: false
  })
  FK_CourseOnTermAutomation!: CourseOnTermAutomationCreateNestedOneWithoutAutomationLogInput;
}

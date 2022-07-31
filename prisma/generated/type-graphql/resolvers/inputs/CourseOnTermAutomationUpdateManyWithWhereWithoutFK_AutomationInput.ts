import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationScalarWhereInput } from "../inputs/CourseOnTermAutomationScalarWhereInput";
import { CourseOnTermAutomationUpdateManyMutationInput } from "../inputs/CourseOnTermAutomationUpdateManyMutationInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateManyWithWhereWithoutFK_AutomationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateManyWithWhereWithoutFK_AutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationScalarWhereInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationScalarWhereInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CourseOnTermAutomationUpdateManyMutationInput;
}

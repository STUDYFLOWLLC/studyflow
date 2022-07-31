import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateWithoutAutomationLogInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutAutomationLogInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateWithoutAutomationLogInput;
}

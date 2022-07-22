import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateWithWhereUniqueWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  data!: CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput;
}

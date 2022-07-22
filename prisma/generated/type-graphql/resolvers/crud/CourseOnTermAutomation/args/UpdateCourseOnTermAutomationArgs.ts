import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationUpdateInput } from "../../../inputs/CourseOnTermAutomationUpdateInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../../../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateInput, {
    nullable: false
  })
  data!: CourseOnTermAutomationUpdateInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;
}

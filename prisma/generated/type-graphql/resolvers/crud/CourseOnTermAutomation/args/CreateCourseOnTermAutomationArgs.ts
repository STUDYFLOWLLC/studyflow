import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationCreateInput } from "../../../inputs/CourseOnTermAutomationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateInput, {
    nullable: false
  })
  data!: CourseOnTermAutomationCreateInput;
}

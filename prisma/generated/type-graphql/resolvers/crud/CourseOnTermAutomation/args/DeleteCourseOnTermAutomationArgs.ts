import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationWhereUniqueInput } from "../../../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationWhereInput } from "../../../inputs/CourseOnTermAutomationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  where?: CourseOnTermAutomationWhereInput | undefined;
}

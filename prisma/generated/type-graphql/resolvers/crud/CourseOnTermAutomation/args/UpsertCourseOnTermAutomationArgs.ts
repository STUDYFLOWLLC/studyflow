import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationCreateInput } from "../../../inputs/CourseOnTermAutomationCreateInput";
import { CourseOnTermAutomationUpdateInput } from "../../../inputs/CourseOnTermAutomationUpdateInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../../../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateInput, {
    nullable: false
  })
  update!: CourseOnTermAutomationUpdateInput;
}

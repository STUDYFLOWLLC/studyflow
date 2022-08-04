import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationCreateManyInput } from "../../../inputs/CourseOnTermAutomationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateManyInput], {
    nullable: false
  })
  data!: CourseOnTermAutomationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermUpdateInput } from "../../../inputs/CourseOnTermUpdateInput";
import { CourseOnTermWhereUniqueInput } from "../../../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermUpdateInput, {
    nullable: false
  })
  data!: CourseOnTermUpdateInput;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;
}

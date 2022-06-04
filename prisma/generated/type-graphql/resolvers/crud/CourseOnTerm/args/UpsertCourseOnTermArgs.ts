import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermCreateInput } from "../../../inputs/CourseOnTermCreateInput";
import { CourseOnTermUpdateInput } from "../../../inputs/CourseOnTermUpdateInput";
import { CourseOnTermWhereUniqueInput } from "../../../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateInput, {
    nullable: false
  })
  create!: CourseOnTermCreateInput;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateInput, {
    nullable: false
  })
  update!: CourseOnTermUpdateInput;
}

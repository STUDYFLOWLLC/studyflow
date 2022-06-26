import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermCreateInput } from "../../../inputs/CourseOnTermCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermCreateInput, {
    nullable: false
  })
  data!: CourseOnTermCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermWhereUniqueInput } from "../../../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;
}

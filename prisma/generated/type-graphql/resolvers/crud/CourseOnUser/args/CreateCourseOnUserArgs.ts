import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserCreateInput } from "../../../inputs/CourseOnUserCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserCreateInput, {
    nullable: false
  })
  data!: CourseOnUserCreateInput;
}

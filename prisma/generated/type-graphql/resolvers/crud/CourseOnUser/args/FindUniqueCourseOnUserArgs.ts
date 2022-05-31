import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserWhereUniqueInput } from "../../../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;
}

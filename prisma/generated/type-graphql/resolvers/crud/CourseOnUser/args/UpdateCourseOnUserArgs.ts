import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserUpdateInput } from "../../../inputs/CourseOnUserUpdateInput";
import { CourseOnUserWhereUniqueInput } from "../../../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserUpdateInput, {
    nullable: false
  })
  data!: CourseOnUserUpdateInput;

  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;
}

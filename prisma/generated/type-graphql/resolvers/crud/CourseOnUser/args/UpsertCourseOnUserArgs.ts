import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserCreateInput } from "../../../inputs/CourseOnUserCreateInput";
import { CourseOnUserUpdateInput } from "../../../inputs/CourseOnUserUpdateInput";
import { CourseOnUserWhereUniqueInput } from "../../../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnUserCreateInput, {
    nullable: false
  })
  create!: CourseOnUserCreateInput;

  @TypeGraphQL.Field(_type => CourseOnUserUpdateInput, {
    nullable: false
  })
  update!: CourseOnUserUpdateInput;
}

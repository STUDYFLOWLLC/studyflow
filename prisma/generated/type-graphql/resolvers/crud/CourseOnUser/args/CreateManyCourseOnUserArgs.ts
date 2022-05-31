import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserCreateManyInput } from "../../../inputs/CourseOnUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCourseOnUserArgs {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateManyInput], {
    nullable: false
  })
  data!: CourseOnUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

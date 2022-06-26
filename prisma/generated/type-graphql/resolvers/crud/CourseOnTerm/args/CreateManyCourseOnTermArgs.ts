import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermCreateManyInput } from "../../../inputs/CourseOnTermCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCourseOnTermArgs {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateManyInput], {
    nullable: false
  })
  data!: CourseOnTermCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

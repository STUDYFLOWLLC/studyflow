import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermUpdateManyMutationInput } from "../../../inputs/CourseOnTermUpdateManyMutationInput";
import { CourseOnTermWhereInput } from "../../../inputs/CourseOnTermWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermUpdateManyMutationInput, {
    nullable: false
  })
  data!: CourseOnTermUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  where?: CourseOnTermWhereInput | undefined;
}

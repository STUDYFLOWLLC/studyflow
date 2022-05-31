import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserUpdateManyMutationInput } from "../../../inputs/CourseOnUserUpdateManyMutationInput";
import { CourseOnUserWhereInput } from "../../../inputs/CourseOnUserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserUpdateManyMutationInput, {
    nullable: false
  })
  data!: CourseOnUserUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  where?: CourseOnUserWhereInput | undefined;
}

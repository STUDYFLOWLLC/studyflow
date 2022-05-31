import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserWhereInput } from "../../../inputs/CourseOnUserWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  where?: CourseOnUserWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermWhereInput } from "../../../inputs/CourseOnTermWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  where?: CourseOnTermWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermOrderByWithRelationInput } from "../../../inputs/CourseOnTermOrderByWithRelationInput";
import { CourseOnTermWhereInput } from "../../../inputs/CourseOnTermWhereInput";
import { CourseOnTermWhereUniqueInput } from "../../../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  where?: CourseOnTermWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CourseOnTermOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  cursor?: CourseOnTermWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

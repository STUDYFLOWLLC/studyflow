import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserOrderByWithRelationInput } from "../../../inputs/CourseOnUserOrderByWithRelationInput";
import { CourseOnUserWhereInput } from "../../../inputs/CourseOnUserWhereInput";
import { CourseOnUserWhereUniqueInput } from "../../../inputs/CourseOnUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  where?: CourseOnUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CourseOnUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: CourseOnUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermOrderByWithAggregationInput } from "../../../inputs/CourseOnTermOrderByWithAggregationInput";
import { CourseOnTermScalarWhereWithAggregatesInput } from "../../../inputs/CourseOnTermScalarWhereWithAggregatesInput";
import { CourseOnTermWhereInput } from "../../../inputs/CourseOnTermWhereInput";
import { CourseOnTermScalarFieldEnum } from "../../../../enums/CourseOnTermScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCourseOnTermArgs {
  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  where?: CourseOnTermWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CourseOnTermOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"CourseOnTermID" | "CreatedTime" | "FK_CourseID" | "FK_TermID">;

  @TypeGraphQL.Field(_type => CourseOnTermScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CourseOnTermScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

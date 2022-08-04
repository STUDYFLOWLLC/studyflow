import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOrderByWithAggregationInput } from "../../../inputs/CourseOrderByWithAggregationInput";
import { CourseScalarWhereWithAggregatesInput } from "../../../inputs/CourseScalarWhereWithAggregatesInput";
import { CourseWhereInput } from "../../../inputs/CourseWhereInput";
import { CourseScalarFieldEnum } from "../../../../enums/CourseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCourseArgs {
  @TypeGraphQL.Field(_type => CourseWhereInput, {
    nullable: true
  })
  where?: CourseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CourseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"CourseID" | "CreatedTime" | "IsOfficial" | "Term" | "Code" | "Title" | "FK_SchoolID" | "FK_ProfessorID">;

  @TypeGraphQL.Field(_type => CourseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CourseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

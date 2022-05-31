import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnUserOrderByWithAggregationInput } from "../../../inputs/CourseOnUserOrderByWithAggregationInput";
import { CourseOnUserScalarWhereWithAggregatesInput } from "../../../inputs/CourseOnUserScalarWhereWithAggregatesInput";
import { CourseOnUserWhereInput } from "../../../inputs/CourseOnUserWhereInput";
import { CourseOnUserScalarFieldEnum } from "../../../../enums/CourseOnUserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCourseOnUserArgs {
  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  where?: CourseOnUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CourseOnUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"CourseOnUserID" | "HOLDER" | "FK_UserID" | "FK_CourseID">;

  @TypeGraphQL.Field(_type => CourseOnUserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CourseOnUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermOrderByWithRelationInput } from "../../../inputs/CourseOnTermOrderByWithRelationInput";
import { CourseOnTermWhereInput } from "../../../inputs/CourseOnTermWhereInput";
import { CourseOnTermWhereUniqueInput } from "../../../inputs/CourseOnTermWhereUniqueInput";
import { CourseOnTermScalarFieldEnum } from "../../../../enums/CourseOnTermScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCourseOnTermArgs {
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

  @TypeGraphQL.Field(_type => [CourseOnTermScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"CourseOnTermID" | "CreatedTime" | "Index" | "Color" | "Nickname" | "IsNew" | "FK_CourseID" | "FK_TermID"> | undefined;
}

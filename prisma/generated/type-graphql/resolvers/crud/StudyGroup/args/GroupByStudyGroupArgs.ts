import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupOrderByWithAggregationInput } from "../../../inputs/StudyGroupOrderByWithAggregationInput";
import { StudyGroupScalarWhereWithAggregatesInput } from "../../../inputs/StudyGroupScalarWhereWithAggregatesInput";
import { StudyGroupWhereInput } from "../../../inputs/StudyGroupWhereInput";
import { StudyGroupScalarFieldEnum } from "../../../../enums/StudyGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupWhereInput, {
    nullable: true
  })
  where?: StudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StudyGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"StudyGroupID" | "Name" | "FK_UserID">;

  @TypeGraphQL.Field(_type => StudyGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StudyGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

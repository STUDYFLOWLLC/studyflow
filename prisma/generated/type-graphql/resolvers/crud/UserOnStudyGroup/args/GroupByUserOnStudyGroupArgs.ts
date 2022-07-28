import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupOrderByWithAggregationInput } from "../../../inputs/UserOnStudyGroupOrderByWithAggregationInput";
import { UserOnStudyGroupScalarWhereWithAggregatesInput } from "../../../inputs/UserOnStudyGroupScalarWhereWithAggregatesInput";
import { UserOnStudyGroupWhereInput } from "../../../inputs/UserOnStudyGroupWhereInput";
import { UserOnStudyGroupScalarFieldEnum } from "../../../../enums/UserOnStudyGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => UserOnStudyGroupWhereInput, {
    nullable: true
  })
  where?: UserOnStudyGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserOnStudyGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"UserOnStudyGroupID" | "SendDate" | "AcceptDate" | "RemoveDate" | "FK_UserID" | "FK_StudyGroupID">;

  @TypeGraphQL.Field(_type => UserOnStudyGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserOnStudyGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

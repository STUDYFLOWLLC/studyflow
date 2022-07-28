import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipOrderByWithAggregationInput } from "../../../inputs/FriendshipOrderByWithAggregationInput";
import { FriendshipScalarWhereWithAggregatesInput } from "../../../inputs/FriendshipScalarWhereWithAggregatesInput";
import { FriendshipWhereInput } from "../../../inputs/FriendshipWhereInput";
import { FriendshipScalarFieldEnum } from "../../../../enums/FriendshipScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  where?: FriendshipWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FriendshipOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FriendshipOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FriendshipID" | "SentTime" | "AcceptedTime" | "RejectedTime" | "FK_UserFromID" | "FK_UserToID">;

  @TypeGraphQL.Field(_type => FriendshipScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FriendshipScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

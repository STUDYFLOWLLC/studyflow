import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipOrderByWithRelationInput } from "../../../inputs/FriendshipOrderByWithRelationInput";
import { FriendshipWhereInput } from "../../../inputs/FriendshipWhereInput";
import { FriendshipWhereUniqueInput } from "../../../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  where?: FriendshipWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FriendshipOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FriendshipOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: true
  })
  cursor?: FriendshipWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

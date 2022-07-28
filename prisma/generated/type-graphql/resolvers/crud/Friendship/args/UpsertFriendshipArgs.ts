import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipCreateInput } from "../../../inputs/FriendshipCreateInput";
import { FriendshipUpdateInput } from "../../../inputs/FriendshipUpdateInput";
import { FriendshipWhereUniqueInput } from "../../../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipCreateInput, {
    nullable: false
  })
  create!: FriendshipCreateInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateInput, {
    nullable: false
  })
  update!: FriendshipUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipUpdateInput } from "../../../inputs/FriendshipUpdateInput";
import { FriendshipWhereUniqueInput } from "../../../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipUpdateInput, {
    nullable: false
  })
  data!: FriendshipUpdateInput;

  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;
}

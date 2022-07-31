import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipUpdateManyMutationInput } from "../../../inputs/FriendshipUpdateManyMutationInput";
import { FriendshipWhereInput } from "../../../inputs/FriendshipWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipUpdateManyMutationInput, {
    nullable: false
  })
  data!: FriendshipUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  where?: FriendshipWhereInput | undefined;
}

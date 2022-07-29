import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipWhereInput } from "../../../inputs/FriendshipWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  where?: FriendshipWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FriendshipCreateInput } from "../../../inputs/FriendshipCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFriendshipArgs {
  @TypeGraphQL.Field(_type => FriendshipCreateInput, {
    nullable: false
  })
  data!: FriendshipCreateInput;
}

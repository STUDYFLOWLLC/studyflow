import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutFK_UserToInput } from "../inputs/FriendshipCreateWithoutFK_UserToInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateOrConnectWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipCreateOrConnectWithoutFK_UserToInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutFK_UserToInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutFK_UserToInput;
}

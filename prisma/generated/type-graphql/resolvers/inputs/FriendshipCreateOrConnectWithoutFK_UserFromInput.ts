import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutFK_UserFromInput } from "../inputs/FriendshipCreateWithoutFK_UserFromInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateOrConnectWithoutFK_UserFromInput", {
  isAbstract: true
})
export class FriendshipCreateOrConnectWithoutFK_UserFromInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutFK_UserFromInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutFK_UserFromInput;
}

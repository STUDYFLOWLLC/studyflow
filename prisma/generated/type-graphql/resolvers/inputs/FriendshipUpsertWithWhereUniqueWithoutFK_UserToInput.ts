import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutFK_UserToInput } from "../inputs/FriendshipCreateWithoutFK_UserToInput";
import { FriendshipUpdateWithoutFK_UserToInput } from "../inputs/FriendshipUpdateWithoutFK_UserToInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipUpsertWithWhereUniqueWithoutFK_UserToInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFK_UserToInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutFK_UserToInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutFK_UserToInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutFK_UserToInput;
}

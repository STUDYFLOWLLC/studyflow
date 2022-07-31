import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateWithoutFK_UserFromInput } from "../inputs/FriendshipCreateWithoutFK_UserFromInput";
import { FriendshipUpdateWithoutFK_UserFromInput } from "../inputs/FriendshipUpdateWithoutFK_UserFromInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpsertWithWhereUniqueWithoutFK_UserFromInput", {
  isAbstract: true
})
export class FriendshipUpsertWithWhereUniqueWithoutFK_UserFromInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFK_UserFromInput, {
    nullable: false
  })
  update!: FriendshipUpdateWithoutFK_UserFromInput;

  @TypeGraphQL.Field(_type => FriendshipCreateWithoutFK_UserFromInput, {
    nullable: false
  })
  create!: FriendshipCreateWithoutFK_UserFromInput;
}

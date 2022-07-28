import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipUpdateWithoutFK_UserToInput } from "../inputs/FriendshipUpdateWithoutFK_UserToInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateWithWhereUniqueWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipUpdateWithWhereUniqueWithoutFK_UserToInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFK_UserToInput, {
    nullable: false
  })
  data!: FriendshipUpdateWithoutFK_UserToInput;
}

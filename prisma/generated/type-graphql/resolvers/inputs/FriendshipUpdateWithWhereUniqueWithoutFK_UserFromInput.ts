import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipUpdateWithoutFK_UserFromInput } from "../inputs/FriendshipUpdateWithoutFK_UserFromInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateWithWhereUniqueWithoutFK_UserFromInput", {
  isAbstract: true
})
export class FriendshipUpdateWithWhereUniqueWithoutFK_UserFromInput {
  @TypeGraphQL.Field(_type => FriendshipWhereUniqueInput, {
    nullable: false
  })
  where!: FriendshipWhereUniqueInput;

  @TypeGraphQL.Field(_type => FriendshipUpdateWithoutFK_UserFromInput, {
    nullable: false
  })
  data!: FriendshipUpdateWithoutFK_UserFromInput;
}

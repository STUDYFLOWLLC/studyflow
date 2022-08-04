import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipWhereInput } from "../inputs/FriendshipWhereInput";

@TypeGraphQL.InputType("FriendshipListRelationFilter", {
  isAbstract: true
})
export class FriendshipListRelationFilter {
  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  every?: FriendshipWhereInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  some?: FriendshipWhereInput | undefined;

  @TypeGraphQL.Field(_type => FriendshipWhereInput, {
    nullable: true
  })
  none?: FriendshipWhereInput | undefined;
}

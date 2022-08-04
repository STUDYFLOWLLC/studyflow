import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FriendshipWhereUniqueInput", {
  isAbstract: true
})
export class FriendshipWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FriendshipID?: string | undefined;
}

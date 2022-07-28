import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FriendshipCreateManyFK_UserToInput", {
  isAbstract: true
})
export class FriendshipCreateManyFK_UserToInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FriendshipID?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SentTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RejectedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserFromID?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FriendshipMaxAggregate", {
  isAbstract: true
})
export class FriendshipMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FriendshipID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SentTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserFromID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserToID!: number | null;
}

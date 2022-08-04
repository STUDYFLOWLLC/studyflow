import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FriendshipMinAggregate", {
  isAbstract: true
})
export class FriendshipMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FriendshipID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SentTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RejectedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemovedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CanceledTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserFromID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserToID!: number | null;
}

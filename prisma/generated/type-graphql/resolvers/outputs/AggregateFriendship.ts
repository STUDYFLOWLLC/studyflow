import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipAvgAggregate } from "../outputs/FriendshipAvgAggregate";
import { FriendshipCountAggregate } from "../outputs/FriendshipCountAggregate";
import { FriendshipMaxAggregate } from "../outputs/FriendshipMaxAggregate";
import { FriendshipMinAggregate } from "../outputs/FriendshipMinAggregate";
import { FriendshipSumAggregate } from "../outputs/FriendshipSumAggregate";

@TypeGraphQL.ObjectType("AggregateFriendship", {
  isAbstract: true
})
export class AggregateFriendship {
  @TypeGraphQL.Field(_type => FriendshipCountAggregate, {
    nullable: true
  })
  _count!: FriendshipCountAggregate | null;

  @TypeGraphQL.Field(_type => FriendshipAvgAggregate, {
    nullable: true
  })
  _avg!: FriendshipAvgAggregate | null;

  @TypeGraphQL.Field(_type => FriendshipSumAggregate, {
    nullable: true
  })
  _sum!: FriendshipSumAggregate | null;

  @TypeGraphQL.Field(_type => FriendshipMinAggregate, {
    nullable: true
  })
  _min!: FriendshipMinAggregate | null;

  @TypeGraphQL.Field(_type => FriendshipMaxAggregate, {
    nullable: true
  })
  _max!: FriendshipMaxAggregate | null;
}

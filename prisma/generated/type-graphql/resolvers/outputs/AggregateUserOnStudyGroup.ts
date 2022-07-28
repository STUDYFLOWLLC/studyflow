import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupAvgAggregate } from "../outputs/UserOnStudyGroupAvgAggregate";
import { UserOnStudyGroupCountAggregate } from "../outputs/UserOnStudyGroupCountAggregate";
import { UserOnStudyGroupMaxAggregate } from "../outputs/UserOnStudyGroupMaxAggregate";
import { UserOnStudyGroupMinAggregate } from "../outputs/UserOnStudyGroupMinAggregate";
import { UserOnStudyGroupSumAggregate } from "../outputs/UserOnStudyGroupSumAggregate";

@TypeGraphQL.ObjectType("AggregateUserOnStudyGroup", {
  isAbstract: true
})
export class AggregateUserOnStudyGroup {
  @TypeGraphQL.Field(_type => UserOnStudyGroupCountAggregate, {
    nullable: true
  })
  _count!: UserOnStudyGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => UserOnStudyGroupAvgAggregate, {
    nullable: true
  })
  _avg!: UserOnStudyGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserOnStudyGroupSumAggregate, {
    nullable: true
  })
  _sum!: UserOnStudyGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => UserOnStudyGroupMinAggregate, {
    nullable: true
  })
  _min!: UserOnStudyGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => UserOnStudyGroupMaxAggregate, {
    nullable: true
  })
  _max!: UserOnStudyGroupMaxAggregate | null;
}

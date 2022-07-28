import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupAvgAggregate } from "../outputs/UserOnStudyGroupAvgAggregate";
import { UserOnStudyGroupCountAggregate } from "../outputs/UserOnStudyGroupCountAggregate";
import { UserOnStudyGroupMaxAggregate } from "../outputs/UserOnStudyGroupMaxAggregate";
import { UserOnStudyGroupMinAggregate } from "../outputs/UserOnStudyGroupMinAggregate";
import { UserOnStudyGroupSumAggregate } from "../outputs/UserOnStudyGroupSumAggregate";

@TypeGraphQL.ObjectType("UserOnStudyGroupGroupBy", {
  isAbstract: true
})
export class UserOnStudyGroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UserOnStudyGroupID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  SendDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemoveDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_StudyGroupID!: number | null;

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

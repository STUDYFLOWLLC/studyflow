import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupAvgAggregate } from "../outputs/StudyGroupAvgAggregate";
import { StudyGroupCountAggregate } from "../outputs/StudyGroupCountAggregate";
import { StudyGroupMaxAggregate } from "../outputs/StudyGroupMaxAggregate";
import { StudyGroupMinAggregate } from "../outputs/StudyGroupMinAggregate";
import { StudyGroupSumAggregate } from "../outputs/StudyGroupSumAggregate";

@TypeGraphQL.ObjectType("StudyGroupGroupBy", {
  isAbstract: true
})
export class StudyGroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  StudyGroupID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_UserID!: number;

  @TypeGraphQL.Field(_type => StudyGroupCountAggregate, {
    nullable: true
  })
  _count!: StudyGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => StudyGroupAvgAggregate, {
    nullable: true
  })
  _avg!: StudyGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => StudyGroupSumAggregate, {
    nullable: true
  })
  _sum!: StudyGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => StudyGroupMinAggregate, {
    nullable: true
  })
  _min!: StudyGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => StudyGroupMaxAggregate, {
    nullable: true
  })
  _max!: StudyGroupMaxAggregate | null;
}

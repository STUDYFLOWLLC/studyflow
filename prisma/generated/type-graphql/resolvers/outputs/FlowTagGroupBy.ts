import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagAvgAggregate } from "../outputs/FlowTagAvgAggregate";
import { FlowTagCountAggregate } from "../outputs/FlowTagCountAggregate";
import { FlowTagMaxAggregate } from "../outputs/FlowTagMaxAggregate";
import { FlowTagMinAggregate } from "../outputs/FlowTagMinAggregate";
import { FlowTagSumAggregate } from "../outputs/FlowTagSumAggregate";

@TypeGraphQL.ObjectType("FlowTagGroupBy", {
  isAbstract: true
})
export class FlowTagGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowTagID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Public!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => FlowTagCountAggregate, {
    nullable: true
  })
  _count!: FlowTagCountAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagAvgAggregate, {
    nullable: true
  })
  _avg!: FlowTagAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagSumAggregate, {
    nullable: true
  })
  _sum!: FlowTagSumAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagMinAggregate, {
    nullable: true
  })
  _min!: FlowTagMinAggregate | null;

  @TypeGraphQL.Field(_type => FlowTagMaxAggregate, {
    nullable: true
  })
  _max!: FlowTagMaxAggregate | null;
}

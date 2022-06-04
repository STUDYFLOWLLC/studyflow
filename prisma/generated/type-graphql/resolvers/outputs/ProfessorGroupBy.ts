import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorAvgAggregate } from "../outputs/ProfessorAvgAggregate";
import { ProfessorCountAggregate } from "../outputs/ProfessorCountAggregate";
import { ProfessorMaxAggregate } from "../outputs/ProfessorMaxAggregate";
import { ProfessorMinAggregate } from "../outputs/ProfessorMinAggregate";
import { ProfessorSumAggregate } from "../outputs/ProfessorSumAggregate";

@TypeGraphQL.ObjectType("ProfessorGroupBy", {
  isAbstract: true
})
export class ProfessorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProfessorID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Email!: string | null;

  @TypeGraphQL.Field(_type => ProfessorCountAggregate, {
    nullable: true
  })
  _count!: ProfessorCountAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorAvgAggregate, {
    nullable: true
  })
  _avg!: ProfessorAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorSumAggregate, {
    nullable: true
  })
  _sum!: ProfessorSumAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorMinAggregate, {
    nullable: true
  })
  _min!: ProfessorMinAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorMaxAggregate, {
    nullable: true
  })
  _max!: ProfessorMaxAggregate | null;
}

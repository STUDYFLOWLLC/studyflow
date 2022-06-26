import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolAvgAggregate } from "../outputs/SchoolAvgAggregate";
import { SchoolCountAggregate } from "../outputs/SchoolCountAggregate";
import { SchoolMaxAggregate } from "../outputs/SchoolMaxAggregate";
import { SchoolMinAggregate } from "../outputs/SchoolMinAggregate";
import { SchoolSumAggregate } from "../outputs/SchoolSumAggregate";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.ObjectType("SchoolGroupBy", {
  isAbstract: true
})
export class SchoolGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SchoolID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  HasClassSupport!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SearchIndex!: string | null;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  TermType!: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | null;

  @TypeGraphQL.Field(_type => SchoolCountAggregate, {
    nullable: true
  })
  _count!: SchoolCountAggregate | null;

  @TypeGraphQL.Field(_type => SchoolAvgAggregate, {
    nullable: true
  })
  _avg!: SchoolAvgAggregate | null;

  @TypeGraphQL.Field(_type => SchoolSumAggregate, {
    nullable: true
  })
  _sum!: SchoolSumAggregate | null;

  @TypeGraphQL.Field(_type => SchoolMinAggregate, {
    nullable: true
  })
  _min!: SchoolMinAggregate | null;

  @TypeGraphQL.Field(_type => SchoolMaxAggregate, {
    nullable: true
  })
  _max!: SchoolMaxAggregate | null;
}

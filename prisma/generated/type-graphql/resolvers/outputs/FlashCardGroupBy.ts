import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardAvgAggregate } from "../outputs/FlashcardAvgAggregate";
import { FlashcardCountAggregate } from "../outputs/FlashcardCountAggregate";
import { FlashcardMaxAggregate } from "../outputs/FlashcardMaxAggregate";
import { FlashcardMinAggregate } from "../outputs/FlashcardMinAggregate";
import { FlashcardSumAggregate } from "../outputs/FlashcardSumAggregate";

@TypeGraphQL.ObjectType("FlashcardGroupBy", {
  isAbstract: true
})
export class FlashcardGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Front!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Back!: string;

  @TypeGraphQL.Field(_type => FlashcardCountAggregate, {
    nullable: true
  })
  _count!: FlashcardCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardAvgAggregate, {
    nullable: true
  })
  _avg!: FlashcardAvgAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardSumAggregate, {
    nullable: true
  })
  _sum!: FlashcardSumAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardMinAggregate, {
    nullable: true
  })
  _min!: FlashcardMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardMaxAggregate, {
    nullable: true
  })
  _max!: FlashcardMaxAggregate | null;
}

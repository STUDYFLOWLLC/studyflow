import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCountAggregate } from "../outputs/RepetitionCountAggregate";
import { RepetitionMaxAggregate } from "../outputs/RepetitionMaxAggregate";
import { RepetitionMinAggregate } from "../outputs/RepetitionMinAggregate";

@TypeGraphQL.ObjectType("RepetitionGroupBy", {
  isAbstract: true
})
export class RepetitionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RepetitionID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID!: string | null;

  @TypeGraphQL.Field(_type => RepetitionCountAggregate, {
    nullable: true
  })
  _count!: RepetitionCountAggregate | null;

  @TypeGraphQL.Field(_type => RepetitionMinAggregate, {
    nullable: true
  })
  _min!: RepetitionMinAggregate | null;

  @TypeGraphQL.Field(_type => RepetitionMaxAggregate, {
    nullable: true
  })
  _max!: RepetitionMaxAggregate | null;
}

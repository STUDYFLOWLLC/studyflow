import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCountAggregate } from "../outputs/FlashcardStackCountAggregate";
import { FlashcardStackMaxAggregate } from "../outputs/FlashcardStackMaxAggregate";
import { FlashcardStackMinAggregate } from "../outputs/FlashcardStackMinAggregate";

@TypeGraphQL.ObjectType("FlashcardStackGroupBy", {
  isAbstract: true
})
export class FlashcardStackGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FlashcardStackID!: string;

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
  FK_FlowID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Description!: string;

  @TypeGraphQL.Field(_type => FlashcardStackCountAggregate, {
    nullable: true
  })
  _count!: FlashcardStackCountAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardStackMinAggregate, {
    nullable: true
  })
  _min!: FlashcardStackMinAggregate | null;

  @TypeGraphQL.Field(_type => FlashcardStackMaxAggregate, {
    nullable: true
  })
  _max!: FlashcardStackMaxAggregate | null;
}

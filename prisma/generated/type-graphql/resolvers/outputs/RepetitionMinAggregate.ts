import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.ObjectType("RepetitionMinAggregate", {
  isAbstract: true
})
export class RepetitionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RepetitionID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  RepetitionType!: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID!: string | null;
}

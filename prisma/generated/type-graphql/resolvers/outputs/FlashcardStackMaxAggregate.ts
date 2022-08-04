import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FlashcardStackMaxAggregate", {
  isAbstract: true
})
export class FlashcardStackMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description!: string | null;
}

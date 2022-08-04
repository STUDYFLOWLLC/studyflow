import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FlashcardStackReviewMaxAggregate", {
  isAbstract: true
})
export class FlashcardStackReviewMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackReviewID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  EndTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID!: string | null;
}

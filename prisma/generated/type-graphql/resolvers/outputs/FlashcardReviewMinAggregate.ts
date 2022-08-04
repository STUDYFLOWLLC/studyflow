import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.ObjectType("FlashcardReviewMinAggregate", {
  isAbstract: true
})
export class FlashcardReviewMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardReviewID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: true
  })
  Status!: "NEUTRAL" | "CORRECT" | "INCORRECT" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackReviewID!: string | null;
}

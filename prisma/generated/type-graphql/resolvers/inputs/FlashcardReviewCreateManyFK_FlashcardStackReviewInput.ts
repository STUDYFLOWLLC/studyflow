import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStatus } from "../../enums/FlashcardStatus";

@TypeGraphQL.InputType("FlashcardReviewCreateManyFK_FlashcardStackReviewInput", {
  isAbstract: true
})
export class FlashcardReviewCreateManyFK_FlashcardStackReviewInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardReviewID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashcardStatus, {
    nullable: true
  })
  Status?: "NEUTRAL" | "CORRECT" | "INCORRECT" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardID?: string | undefined;
}

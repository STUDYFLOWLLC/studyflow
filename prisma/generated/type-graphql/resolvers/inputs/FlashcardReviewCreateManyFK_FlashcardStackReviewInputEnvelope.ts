import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateManyFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateManyFK_FlashcardStackReviewInput";

@TypeGraphQL.InputType("FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope", {
  isAbstract: true
})
export class FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateManyFK_FlashcardStackReviewInput], {
    nullable: false
  })
  data!: FlashcardReviewCreateManyFK_FlashcardStackReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateManyFK_FlashcardInput } from "../inputs/FlashcardReviewCreateManyFK_FlashcardInput";

@TypeGraphQL.InputType("FlashcardReviewCreateManyFK_FlashcardInputEnvelope", {
  isAbstract: true
})
export class FlashcardReviewCreateManyFK_FlashcardInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateManyFK_FlashcardInput], {
    nullable: false
  })
  data!: FlashcardReviewCreateManyFK_FlashcardInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

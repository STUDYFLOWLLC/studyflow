import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateManyFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateManyFK_FlashcardStackInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope", {
  isAbstract: true
})
export class FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewCreateManyFK_FlashcardStackInput], {
    nullable: false
  })
  data!: FlashcardStackReviewCreateManyFK_FlashcardStackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

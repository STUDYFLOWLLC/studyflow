import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewScalarWhereInput } from "../inputs/FlashcardReviewScalarWhereInput";
import { FlashcardReviewUpdateManyMutationInput } from "../inputs/FlashcardReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewUpdateManyWithWhereWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => FlashcardReviewScalarWhereInput, {
    nullable: false
  })
  where!: FlashcardReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => FlashcardReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardReviewUpdateManyMutationInput;
}

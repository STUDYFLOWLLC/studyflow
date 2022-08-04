import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewScalarWhereInput } from "../inputs/FlashcardStackReviewScalarWhereInput";
import { FlashcardStackReviewUpdateManyMutationInput } from "../inputs/FlashcardStackReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateManyWithWhereWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateManyWithWhereWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewScalarWhereInput, {
    nullable: false
  })
  where!: FlashcardStackReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardStackReviewUpdateManyMutationInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateNestedOneWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateNestedOneWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  create?: FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardStackReviewWhereUniqueInput | undefined;
}

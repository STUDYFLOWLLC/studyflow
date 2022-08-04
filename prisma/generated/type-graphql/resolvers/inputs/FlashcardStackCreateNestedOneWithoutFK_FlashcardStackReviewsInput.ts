import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput", {
  isAbstract: true
})
export class FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardStackWhereUniqueInput | undefined;
}

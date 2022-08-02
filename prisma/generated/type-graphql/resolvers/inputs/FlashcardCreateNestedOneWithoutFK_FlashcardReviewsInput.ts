import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput";
import { FlashcardCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardCreateNestedOneWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardCreateNestedOneWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardCreateWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  create?: FlashcardCreateWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardWhereUniqueInput | undefined;
}

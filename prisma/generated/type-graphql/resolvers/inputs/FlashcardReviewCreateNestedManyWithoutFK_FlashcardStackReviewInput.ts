import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope } from "../inputs/FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope";
import { FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput", {
  isAbstract: true
})
export class FlashcardReviewCreateNestedManyWithoutFK_FlashcardStackReviewInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  create?: FlashcardReviewCreateWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFK_FlashcardStackReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardReviewCreateManyFK_FlashcardStackReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardReviewWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardReviewCreateManyFK_FlashcardInputEnvelope } from "../inputs/FlashcardReviewCreateManyFK_FlashcardInputEnvelope";
import { FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput";
import { FlashcardReviewCreateWithoutFK_FlashcardInput } from "../inputs/FlashcardReviewCreateWithoutFK_FlashcardInput";
import { FlashcardReviewWhereUniqueInput } from "../inputs/FlashcardReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardReviewCreateNestedManyWithoutFK_FlashcardInput", {
  isAbstract: true
})
export class FlashcardReviewCreateNestedManyWithoutFK_FlashcardInput {
  @TypeGraphQL.Field(_type => [FlashcardReviewCreateWithoutFK_FlashcardInput], {
    nullable: true
  })
  create?: FlashcardReviewCreateWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardReviewCreateOrConnectWithoutFK_FlashcardInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardReviewCreateManyFK_FlashcardInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardReviewCreateManyFK_FlashcardInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardReviewWhereUniqueInput[] | undefined;
}

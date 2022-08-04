import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope } from "../inputs/FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope";
import { FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateNestedManyWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateNestedManyWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewCreateWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  create?: FlashcardStackReviewCreateWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardStackReviewWhereUniqueInput[] | undefined;
}

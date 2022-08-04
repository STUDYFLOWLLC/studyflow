import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackUpsertWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackUpsertWithoutFK_FlashcardStackReviewsInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput", {
  isAbstract: true
})
export class FlashcardStackUpdateOneWithoutFK_FlashcardStackReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpsertWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  upsert?: FlashcardStackUpsertWithoutFK_FlashcardStackReviewsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardStackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  update?: FlashcardStackUpdateWithoutFK_FlashcardStackReviewsInput | undefined;
}

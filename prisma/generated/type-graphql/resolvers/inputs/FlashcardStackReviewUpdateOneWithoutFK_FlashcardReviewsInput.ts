import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewUpsertWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardStackReviewUpsertWithoutFK_FlashcardReviewsInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateOneWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateOneWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  create?: FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpsertWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  upsert?: FlashcardStackReviewUpsertWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardStackReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  update?: FlashcardStackReviewUpdateWithoutFK_FlashcardReviewsInput | undefined;
}

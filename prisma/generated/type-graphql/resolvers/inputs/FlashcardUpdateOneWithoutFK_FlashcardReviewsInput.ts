import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput";
import { FlashcardCreateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardReviewsInput";
import { FlashcardUpdateWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardUpdateWithoutFK_FlashcardReviewsInput";
import { FlashcardUpsertWithoutFK_FlashcardReviewsInput } from "../inputs/FlashcardUpsertWithoutFK_FlashcardReviewsInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardUpdateOneWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardUpdateOneWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => FlashcardCreateWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  create?: FlashcardCreateWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardCreateOrConnectWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardUpsertWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  upsert?: FlashcardUpsertWithoutFK_FlashcardReviewsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardUpdateWithoutFK_FlashcardReviewsInput, {
    nullable: true
  })
  update?: FlashcardUpdateWithoutFK_FlashcardReviewsInput | undefined;
}

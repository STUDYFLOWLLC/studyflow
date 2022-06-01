import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateOrConnectWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFlashCardsInput";
import { FlashCardStackCreateWithoutFlashCardsInput } from "../inputs/FlashCardStackCreateWithoutFlashCardsInput";
import { FlashCardStackUpdateWithoutFlashCardsInput } from "../inputs/FlashCardStackUpdateWithoutFlashCardsInput";
import { FlashCardStackUpsertWithoutFlashCardsInput } from "../inputs/FlashCardStackUpsertWithoutFlashCardsInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpdateOneWithoutFlashCardsInput", {
  isAbstract: true
})
export class FlashCardStackUpdateOneWithoutFlashCardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFlashCardsInput, {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFlashCardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateOrConnectWithoutFlashCardsInput, {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFlashCardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackUpsertWithoutFlashCardsInput, {
    nullable: true
  })
  upsert?: FlashCardStackUpsertWithoutFlashCardsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashCardStackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFlashCardsInput, {
    nullable: true
  })
  update?: FlashCardStackUpdateWithoutFlashCardsInput | undefined;
}

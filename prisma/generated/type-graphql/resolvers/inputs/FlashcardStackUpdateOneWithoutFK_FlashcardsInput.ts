import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput";
import { FlashcardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackCreateWithoutFK_FlashcardsInput";
import { FlashcardStackUpdateWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackUpdateWithoutFK_FlashcardsInput";
import { FlashcardStackUpsertWithoutFK_FlashcardsInput } from "../inputs/FlashcardStackUpsertWithoutFK_FlashcardsInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackUpdateOneWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashcardStackUpdateOneWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_FlashcardsInput, {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpsertWithoutFK_FlashcardsInput, {
    nullable: true
  })
  upsert?: FlashcardStackUpsertWithoutFK_FlashcardsInput | undefined;

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

  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_FlashcardsInput, {
    nullable: true
  })
  update?: FlashcardStackUpdateWithoutFK_FlashcardsInput | undefined;
}

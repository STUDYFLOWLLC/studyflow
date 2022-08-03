import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateOrConnectWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_RepetitionInput";
import { FlashcardStackCreateWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateWithoutFK_RepetitionInput";
import { FlashcardStackUpdateWithoutFK_RepetitionInput } from "../inputs/FlashcardStackUpdateWithoutFK_RepetitionInput";
import { FlashcardStackUpsertWithoutFK_RepetitionInput } from "../inputs/FlashcardStackUpsertWithoutFK_RepetitionInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackUpdateOneWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlashcardStackUpdateOneWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_RepetitionInput, {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateOrConnectWithoutFK_RepetitionInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackUpsertWithoutFK_RepetitionInput, {
    nullable: true
  })
  upsert?: FlashcardStackUpsertWithoutFK_RepetitionInput | undefined;

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

  @TypeGraphQL.Field(_type => FlashcardStackUpdateWithoutFK_RepetitionInput, {
    nullable: true
  })
  update?: FlashcardStackUpdateWithoutFK_RepetitionInput | undefined;
}

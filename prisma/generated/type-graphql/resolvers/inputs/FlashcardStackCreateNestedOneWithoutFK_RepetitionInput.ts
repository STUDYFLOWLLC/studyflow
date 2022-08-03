import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateOrConnectWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_RepetitionInput";
import { FlashcardStackCreateWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateWithoutFK_RepetitionInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateNestedOneWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlashcardStackCreateNestedOneWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlashcardStackCreateWithoutFK_RepetitionInput, {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateOrConnectWithoutFK_RepetitionInput, {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashcardStackWhereUniqueInput | undefined;
}

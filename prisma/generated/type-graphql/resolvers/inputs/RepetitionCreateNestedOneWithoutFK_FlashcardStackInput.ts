import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateOrConnectWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_FlashcardStackInput";
import { RepetitionCreateWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateWithoutFK_FlashcardStackInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionCreateNestedOneWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class RepetitionCreateNestedOneWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateOrConnectWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput | undefined;
}

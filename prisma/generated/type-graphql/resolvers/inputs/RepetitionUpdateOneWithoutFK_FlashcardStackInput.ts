import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateOrConnectWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_FlashcardStackInput";
import { RepetitionCreateWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateWithoutFK_FlashcardStackInput";
import { RepetitionUpdateWithoutFK_FlashcardStackInput } from "../inputs/RepetitionUpdateWithoutFK_FlashcardStackInput";
import { RepetitionUpsertWithoutFK_FlashcardStackInput } from "../inputs/RepetitionUpsertWithoutFK_FlashcardStackInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionUpdateOneWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class RepetitionUpdateOneWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateOrConnectWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionUpsertWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  upsert?: RepetitionUpsertWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  update?: RepetitionUpdateWithoutFK_FlashcardStackInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput";
import { FlashCardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateWithoutFK_FlashcardsInput";
import { FlashCardStackUpdateWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackUpdateWithoutFK_FlashcardsInput";
import { FlashCardStackUpsertWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackUpsertWithoutFK_FlashcardsInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpdateOneWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashCardStackUpdateOneWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_FlashcardsInput, {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput, {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackUpsertWithoutFK_FlashcardsInput, {
    nullable: true
  })
  upsert?: FlashCardStackUpsertWithoutFK_FlashcardsInput | undefined;

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

  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFK_FlashcardsInput, {
    nullable: true
  })
  update?: FlashCardStackUpdateWithoutFK_FlashcardsInput | undefined;
}

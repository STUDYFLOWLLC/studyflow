import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput";
import { FlashCardStackCreateWithoutFK_FlashcardsInput } from "../inputs/FlashCardStackCreateWithoutFK_FlashcardsInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateNestedOneWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashCardStackCreateNestedOneWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_FlashcardsInput, {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput, {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFK_FlashcardsInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: true
  })
  connect?: FlashCardStackWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardCreateWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateWithoutFK_FlashCardStackInput";
import { FlashCardUpdateWithoutFK_FlashCardStackInput } from "../inputs/FlashCardUpdateWithoutFK_FlashCardStackInput";
import { FlashCardWhereUniqueInput } from "../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput", {
  isAbstract: true
})
export class FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput {
  @TypeGraphQL.Field(_type => FlashCardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardUpdateWithoutFK_FlashCardStackInput, {
    nullable: false
  })
  update!: FlashCardUpdateWithoutFK_FlashCardStackInput;

  @TypeGraphQL.Field(_type => FlashCardCreateWithoutFK_FlashCardStackInput, {
    nullable: false
  })
  create!: FlashCardCreateWithoutFK_FlashCardStackInput;
}

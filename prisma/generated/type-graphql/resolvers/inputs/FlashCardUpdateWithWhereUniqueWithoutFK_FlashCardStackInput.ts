import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardUpdateWithoutFK_FlashCardStackInput } from "../inputs/FlashCardUpdateWithoutFK_FlashCardStackInput";
import { FlashCardWhereUniqueInput } from "../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput", {
  isAbstract: true
})
export class FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput {
  @TypeGraphQL.Field(_type => FlashCardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardUpdateWithoutFK_FlashCardStackInput, {
    nullable: false
  })
  data!: FlashCardUpdateWithoutFK_FlashCardStackInput;
}

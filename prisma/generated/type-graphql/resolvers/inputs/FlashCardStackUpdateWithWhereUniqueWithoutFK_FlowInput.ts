import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackUpdateWithoutFK_FlowInput } from "../inputs/FlashCardStackUpdateWithoutFK_FlowInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  data!: FlashCardStackUpdateWithoutFK_FlowInput;
}

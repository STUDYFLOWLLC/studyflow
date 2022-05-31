import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackUpdateWithoutFK_UserInput } from "../inputs/FlashCardStackUpdateWithoutFK_UserInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: FlashCardStackUpdateWithoutFK_UserInput;
}

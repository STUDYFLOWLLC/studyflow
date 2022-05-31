import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFK_UserInput } from "../inputs/FlashCardStackCreateWithoutFK_UserInput";
import { FlashCardStackUpdateWithoutFK_UserInput } from "../inputs/FlashCardStackUpdateWithoutFK_UserInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: FlashCardStackUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFK_UserInput;
}

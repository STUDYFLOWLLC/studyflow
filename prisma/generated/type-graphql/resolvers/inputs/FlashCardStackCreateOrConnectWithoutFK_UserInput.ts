import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFK_UserInput } from "../inputs/FlashCardStackCreateWithoutFK_UserInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFK_UserInput;
}

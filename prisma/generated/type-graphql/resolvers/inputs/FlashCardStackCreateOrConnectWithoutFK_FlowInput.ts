import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateWithoutFK_FlowInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateOrConnectWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashCardStackCreateOrConnectWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlashCardStackCreateWithoutFK_FlowInput;
}

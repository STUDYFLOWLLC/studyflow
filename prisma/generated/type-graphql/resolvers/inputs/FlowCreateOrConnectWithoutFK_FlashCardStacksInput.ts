import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashcardStacksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_FlashcardStacksInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_FlashcardStacksInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashcardStacksInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_FlashcardStacksInput;
}

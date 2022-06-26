import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashCardStacksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashCardStacksInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_FlashCardStacksInput;
}

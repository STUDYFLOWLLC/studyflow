import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateOrConnectWithoutFK_FlashcardStacksInput";
import { FlowCreateWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashcardStacksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_FlashcardStacksInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_FlashcardStacksInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateOrConnectWithoutFK_FlashCardStacksInput";
import { FlowCreateWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashCardStacksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}

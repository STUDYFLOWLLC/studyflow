import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateManyFK_FlowInputEnvelope } from "../inputs/FlashCardStackCreateManyFK_FlowInputEnvelope";
import { FlashCardStackCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFK_FlowInput";
import { FlashCardStackCreateWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateWithoutFK_FlowInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateNestedManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashCardStackCreateNestedManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlashCardStackCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashCardStackWhereUniqueInput[] | undefined;
}

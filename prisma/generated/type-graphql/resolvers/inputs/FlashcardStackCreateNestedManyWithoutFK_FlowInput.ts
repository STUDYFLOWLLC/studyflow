import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateManyFK_FlowInputEnvelope } from "../inputs/FlashcardStackCreateManyFK_FlowInputEnvelope";
import { FlashcardStackCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_FlowInput";
import { FlashcardStackCreateWithoutFK_FlowInput } from "../inputs/FlashcardStackCreateWithoutFK_FlowInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackCreateNestedManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashcardStackCreateNestedManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlashcardStackCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardStackCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardStackWhereUniqueInput[] | undefined;
}

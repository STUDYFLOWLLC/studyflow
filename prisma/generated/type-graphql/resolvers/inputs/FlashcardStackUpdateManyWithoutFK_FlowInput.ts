import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateManyFK_FlowInputEnvelope } from "../inputs/FlashcardStackCreateManyFK_FlowInputEnvelope";
import { FlashcardStackCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlashcardStackCreateOrConnectWithoutFK_FlowInput";
import { FlashcardStackCreateWithoutFK_FlowInput } from "../inputs/FlashcardStackCreateWithoutFK_FlowInput";
import { FlashcardStackScalarWhereInput } from "../inputs/FlashcardStackScalarWhereInput";
import { FlashcardStackUpdateManyWithWhereWithoutFK_FlowInput } from "../inputs/FlashcardStackUpdateManyWithWhereWithoutFK_FlowInput";
import { FlashcardStackUpdateWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlashcardStackUpdateWithWhereUniqueWithoutFK_FlowInput";
import { FlashcardStackUpsertWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlashcardStackUpsertWithWhereUniqueWithoutFK_FlowInput";
import { FlashcardStackWhereUniqueInput } from "../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackUpdateManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashcardStackUpdateManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlashcardStackCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlashcardStackCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardStackCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackUpsertWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  upsert?: FlashcardStackUpsertWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardStackCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereUniqueInput], {
    nullable: true
  })
  set?: FlashcardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashcardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashcardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackUpdateWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  update?: FlashcardStackUpdateWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackUpdateManyWithWhereWithoutFK_FlowInput], {
    nullable: true
  })
  updateMany?: FlashcardStackUpdateManyWithWhereWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashcardStackScalarWhereInput[] | undefined;
}

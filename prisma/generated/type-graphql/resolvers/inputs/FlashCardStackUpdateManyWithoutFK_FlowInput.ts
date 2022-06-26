import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateManyFK_FlowInputEnvelope } from "../inputs/FlashCardStackCreateManyFK_FlowInputEnvelope";
import { FlashCardStackCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFK_FlowInput";
import { FlashCardStackCreateWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateWithoutFK_FlowInput";
import { FlashCardStackScalarWhereInput } from "../inputs/FlashCardStackScalarWhereInput";
import { FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput } from "../inputs/FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput";
import { FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput";
import { FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpdateManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashCardStackUpdateManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  upsert?: FlashCardStackUpsertWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlashCardStackCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereUniqueInput], {
    nullable: true
  })
  set?: FlashCardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashCardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashCardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashCardStackWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  update?: FlashCardStackUpdateWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput], {
    nullable: true
  })
  updateMany?: FlashCardStackUpdateManyWithWhereWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashCardStackScalarWhereInput[] | undefined;
}

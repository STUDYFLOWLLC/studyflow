import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardCreateManyFK_FlashCardStackInputEnvelope } from "../inputs/FlashCardCreateManyFK_FlashCardStackInputEnvelope";
import { FlashCardCreateOrConnectWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateOrConnectWithoutFK_FlashCardStackInput";
import { FlashCardCreateWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateWithoutFK_FlashCardStackInput";
import { FlashCardScalarWhereInput } from "../inputs/FlashCardScalarWhereInput";
import { FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput } from "../inputs/FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput";
import { FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput } from "../inputs/FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput";
import { FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput } from "../inputs/FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput";
import { FlashCardWhereUniqueInput } from "../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardUpdateManyWithoutFK_FlashCardStackInput", {
  isAbstract: true
})
export class FlashCardUpdateManyWithoutFK_FlashCardStackInput {
  @TypeGraphQL.Field(_type => [FlashCardCreateWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  create?: FlashCardCreateWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardCreateOrConnectWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  connectOrCreate?: FlashCardCreateOrConnectWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  upsert?: FlashCardUpsertWithWhereUniqueWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardCreateManyFK_FlashCardStackInputEnvelope, {
    nullable: true
  })
  createMany?: FlashCardCreateManyFK_FlashCardStackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereUniqueInput], {
    nullable: true
  })
  set?: FlashCardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashCardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashCardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashCardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  update?: FlashCardUpdateWithWhereUniqueWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput], {
    nullable: true
  })
  updateMany?: FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashCardScalarWhereInput[] | undefined;
}

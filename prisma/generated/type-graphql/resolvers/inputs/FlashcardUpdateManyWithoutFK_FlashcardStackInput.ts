import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateManyFK_FlashcardStackInputEnvelope } from "../inputs/FlashcardCreateManyFK_FlashcardStackInputEnvelope";
import { FlashcardCreateOrConnectWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateOrConnectWithoutFK_FlashcardStackInput";
import { FlashcardCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardStackInput";
import { FlashcardScalarWhereInput } from "../inputs/FlashcardScalarWhereInput";
import { FlashcardUpdateManyWithWhereWithoutFK_FlashcardStackInput } from "../inputs/FlashcardUpdateManyWithWhereWithoutFK_FlashcardStackInput";
import { FlashcardUpdateWithWhereUniqueWithoutFK_FlashcardStackInput } from "../inputs/FlashcardUpdateWithWhereUniqueWithoutFK_FlashcardStackInput";
import { FlashcardUpsertWithWhereUniqueWithoutFK_FlashcardStackInput } from "../inputs/FlashcardUpsertWithWhereUniqueWithoutFK_FlashcardStackInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardUpdateManyWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardUpdateManyWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => [FlashcardCreateWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  create?: FlashcardCreateWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardCreateOrConnectWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardCreateOrConnectWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardUpsertWithWhereUniqueWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  upsert?: FlashcardUpsertWithWhereUniqueWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardCreateManyFK_FlashcardStackInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardCreateManyFK_FlashcardStackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereUniqueInput], {
    nullable: true
  })
  set?: FlashcardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashcardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashcardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardUpdateWithWhereUniqueWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  update?: FlashcardUpdateWithWhereUniqueWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardUpdateManyWithWhereWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  updateMany?: FlashcardUpdateManyWithWhereWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashcardScalarWhereInput[] | undefined;
}

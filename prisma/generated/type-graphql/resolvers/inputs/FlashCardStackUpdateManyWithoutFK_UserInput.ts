import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateManyFK_UserInputEnvelope } from "../inputs/FlashCardStackCreateManyFK_UserInputEnvelope";
import { FlashCardStackCreateOrConnectWithoutFK_UserInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFK_UserInput";
import { FlashCardStackCreateWithoutFK_UserInput } from "../inputs/FlashCardStackCreateWithoutFK_UserInput";
import { FlashCardStackScalarWhereInput } from "../inputs/FlashCardStackScalarWhereInput";
import { FlashCardStackUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/FlashCardStackUpdateManyWithWhereWithoutFK_UserInput";
import { FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput";
import { FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: FlashCardStackUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlashCardStackCreateManyFK_UserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: FlashCardStackUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: FlashCardStackUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashCardStackScalarWhereInput[] | undefined;
}

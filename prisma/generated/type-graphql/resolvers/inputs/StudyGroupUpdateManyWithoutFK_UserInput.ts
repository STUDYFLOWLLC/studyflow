import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateManyFK_UserInputEnvelope } from "../inputs/StudyGroupCreateManyFK_UserInputEnvelope";
import { StudyGroupCreateOrConnectWithoutFK_UserInput } from "../inputs/StudyGroupCreateOrConnectWithoutFK_UserInput";
import { StudyGroupCreateWithoutFK_UserInput } from "../inputs/StudyGroupCreateWithoutFK_UserInput";
import { StudyGroupScalarWhereInput } from "../inputs/StudyGroupScalarWhereInput";
import { StudyGroupUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/StudyGroupUpdateManyWithWhereWithoutFK_UserInput";
import { StudyGroupUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/StudyGroupUpdateWithWhereUniqueWithoutFK_UserInput";
import { StudyGroupUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/StudyGroupUpsertWithWhereUniqueWithoutFK_UserInput";
import { StudyGroupWhereUniqueInput } from "../inputs/StudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("StudyGroupUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class StudyGroupUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [StudyGroupCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: StudyGroupCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: StudyGroupCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: StudyGroupUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => StudyGroupCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: StudyGroupCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereUniqueInput], {
    nullable: true
  })
  set?: StudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: StudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: StudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: StudyGroupUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: StudyGroupUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StudyGroupScalarWhereInput[] | undefined;
}

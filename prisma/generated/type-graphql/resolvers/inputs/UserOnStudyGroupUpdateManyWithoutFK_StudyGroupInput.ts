import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope } from "../inputs/UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope";
import { UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput";
import { UserOnStudyGroupCreateWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateWithoutFK_StudyGroupInput";
import { UserOnStudyGroupScalarWhereInput } from "../inputs/UserOnStudyGroupScalarWhereInput";
import { UserOnStudyGroupUpdateManyWithWhereWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupUpdateManyWithWhereWithoutFK_StudyGroupInput";
import { UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_StudyGroupInput";
import { UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_StudyGroupInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateManyWithoutFK_StudyGroupInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateManyWithoutFK_StudyGroupInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateWithoutFK_StudyGroupInput], {
    nullable: true
  })
  create?: UserOnStudyGroupCreateWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput], {
    nullable: true
  })
  connectOrCreate?: UserOnStudyGroupCreateOrConnectWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_StudyGroupInput], {
    nullable: true
  })
  upsert?: UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope, {
    nullable: true
  })
  createMany?: UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereUniqueInput], {
    nullable: true
  })
  set?: UserOnStudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserOnStudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: UserOnStudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: UserOnStudyGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_StudyGroupInput], {
    nullable: true
  })
  update?: UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupUpdateManyWithWhereWithoutFK_StudyGroupInput], {
    nullable: true
  })
  updateMany?: UserOnStudyGroupUpdateManyWithWhereWithoutFK_StudyGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserOnStudyGroupScalarWhereInput[] | undefined;
}

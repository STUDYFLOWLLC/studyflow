import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateManyFK_UserInputEnvelope } from "../inputs/UserOnStudyGroupCreateManyFK_UserInputEnvelope";
import { UserOnStudyGroupCreateOrConnectWithoutFK_UserInput } from "../inputs/UserOnStudyGroupCreateOrConnectWithoutFK_UserInput";
import { UserOnStudyGroupCreateWithoutFK_UserInput } from "../inputs/UserOnStudyGroupCreateWithoutFK_UserInput";
import { UserOnStudyGroupScalarWhereInput } from "../inputs/UserOnStudyGroupScalarWhereInput";
import { UserOnStudyGroupUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/UserOnStudyGroupUpdateManyWithWhereWithoutFK_UserInput";
import { UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_UserInput";
import { UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_UserInput";
import { UserOnStudyGroupWhereUniqueInput } from "../inputs/UserOnStudyGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: UserOnStudyGroupCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: UserOnStudyGroupCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: UserOnStudyGroupUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: UserOnStudyGroupCreateManyFK_UserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: UserOnStudyGroupUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: UserOnStudyGroupUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserOnStudyGroupScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyFK_SchoolInputEnvelope } from "../inputs/UserCreateManyFK_SchoolInputEnvelope";
import { UserCreateOrConnectWithoutFK_SchoolInput } from "../inputs/UserCreateOrConnectWithoutFK_SchoolInput";
import { UserCreateWithoutFK_SchoolInput } from "../inputs/UserCreateWithoutFK_SchoolInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFK_SchoolInput } from "../inputs/UserUpdateManyWithWhereWithoutFK_SchoolInput";
import { UserUpdateWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFK_SchoolInput";
import { UserUpsertWithWhereUniqueWithoutFK_SchoolInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFK_SchoolInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: UserCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyFK_SchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFK_SchoolInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFK_SchoolInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}

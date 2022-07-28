import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFK_UserToInputEnvelope } from "../inputs/FriendshipCreateManyFK_UserToInputEnvelope";
import { FriendshipCreateOrConnectWithoutFK_UserToInput } from "../inputs/FriendshipCreateOrConnectWithoutFK_UserToInput";
import { FriendshipCreateWithoutFK_UserToInput } from "../inputs/FriendshipCreateWithoutFK_UserToInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutFK_UserToInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutFK_UserToInput";
import { FriendshipUpdateWithWhereUniqueWithoutFK_UserToInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutFK_UserToInput";
import { FriendshipUpsertWithWhereUniqueWithoutFK_UserToInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutFK_UserToInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipUpdateManyWithoutFK_UserToInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFK_UserToInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFK_UserToInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutFK_UserToInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFK_UserToInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFK_UserToInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  set?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  delete?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutFK_UserToInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutFK_UserToInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}

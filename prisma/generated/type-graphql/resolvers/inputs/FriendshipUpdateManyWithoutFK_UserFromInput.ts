import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFK_UserFromInputEnvelope } from "../inputs/FriendshipCreateManyFK_UserFromInputEnvelope";
import { FriendshipCreateOrConnectWithoutFK_UserFromInput } from "../inputs/FriendshipCreateOrConnectWithoutFK_UserFromInput";
import { FriendshipCreateWithoutFK_UserFromInput } from "../inputs/FriendshipCreateWithoutFK_UserFromInput";
import { FriendshipScalarWhereInput } from "../inputs/FriendshipScalarWhereInput";
import { FriendshipUpdateManyWithWhereWithoutFK_UserFromInput } from "../inputs/FriendshipUpdateManyWithWhereWithoutFK_UserFromInput";
import { FriendshipUpdateWithWhereUniqueWithoutFK_UserFromInput } from "../inputs/FriendshipUpdateWithWhereUniqueWithoutFK_UserFromInput";
import { FriendshipUpsertWithWhereUniqueWithoutFK_UserFromInput } from "../inputs/FriendshipUpsertWithWhereUniqueWithoutFK_UserFromInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipUpdateManyWithoutFK_UserFromInput", {
  isAbstract: true
})
export class FriendshipUpdateManyWithoutFK_UserFromInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFK_UserFromInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFK_UserFromInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpsertWithWhereUniqueWithoutFK_UserFromInput], {
    nullable: true
  })
  upsert?: FriendshipUpsertWithWhereUniqueWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFK_UserFromInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFK_UserFromInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FriendshipUpdateWithWhereUniqueWithoutFK_UserFromInput], {
    nullable: true
  })
  update?: FriendshipUpdateWithWhereUniqueWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipUpdateManyWithWhereWithoutFK_UserFromInput], {
    nullable: true
  })
  updateMany?: FriendshipUpdateManyWithWhereWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FriendshipScalarWhereInput[] | undefined;
}

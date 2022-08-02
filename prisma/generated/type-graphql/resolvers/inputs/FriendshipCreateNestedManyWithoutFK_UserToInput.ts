import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFK_UserToInputEnvelope } from "../inputs/FriendshipCreateManyFK_UserToInputEnvelope";
import { FriendshipCreateOrConnectWithoutFK_UserToInput } from "../inputs/FriendshipCreateOrConnectWithoutFK_UserToInput";
import { FriendshipCreateWithoutFK_UserToInput } from "../inputs/FriendshipCreateWithoutFK_UserToInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipCreateNestedManyWithoutFK_UserToInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFK_UserToInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFK_UserToInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFK_UserToInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFK_UserToInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFK_UserToInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}

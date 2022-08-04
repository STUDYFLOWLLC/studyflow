import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FriendshipCreateManyFK_UserFromInputEnvelope } from "../inputs/FriendshipCreateManyFK_UserFromInputEnvelope";
import { FriendshipCreateOrConnectWithoutFK_UserFromInput } from "../inputs/FriendshipCreateOrConnectWithoutFK_UserFromInput";
import { FriendshipCreateWithoutFK_UserFromInput } from "../inputs/FriendshipCreateWithoutFK_UserFromInput";
import { FriendshipWhereUniqueInput } from "../inputs/FriendshipWhereUniqueInput";

@TypeGraphQL.InputType("FriendshipCreateNestedManyWithoutFK_UserFromInput", {
  isAbstract: true
})
export class FriendshipCreateNestedManyWithoutFK_UserFromInput {
  @TypeGraphQL.Field(_type => [FriendshipCreateWithoutFK_UserFromInput], {
    nullable: true
  })
  create?: FriendshipCreateWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => [FriendshipCreateOrConnectWithoutFK_UserFromInput], {
    nullable: true
  })
  connectOrCreate?: FriendshipCreateOrConnectWithoutFK_UserFromInput[] | undefined;

  @TypeGraphQL.Field(_type => FriendshipCreateManyFK_UserFromInputEnvelope, {
    nullable: true
  })
  createMany?: FriendshipCreateManyFK_UserFromInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FriendshipWhereUniqueInput], {
    nullable: true
  })
  connect?: FriendshipWhereUniqueInput[] | undefined;
}

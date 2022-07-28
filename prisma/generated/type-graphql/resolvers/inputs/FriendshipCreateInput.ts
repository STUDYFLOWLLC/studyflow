import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput";
import { UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput";

@TypeGraphQL.InputType("FriendshipCreateInput", {
  isAbstract: true
})
export class FriendshipCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SentTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RejectedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  FK_UserFrom?: UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  FK_UserTo?: UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput | undefined;
}

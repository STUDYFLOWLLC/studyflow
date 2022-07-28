import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput";

@TypeGraphQL.InputType("FriendshipCreateWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipCreateWithoutFK_UserToInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  SentTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  FK_UserFrom?: UserCreateNestedOneWithoutFK_FriendshipsInitiatedInput | undefined;
}

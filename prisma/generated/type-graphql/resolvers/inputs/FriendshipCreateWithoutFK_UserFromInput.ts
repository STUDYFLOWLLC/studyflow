import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput";

@TypeGraphQL.InputType("FriendshipCreateWithoutFK_UserFromInput", {
  isAbstract: true
})
export class FriendshipCreateWithoutFK_UserFromInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FriendshipID?: string | undefined;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemovedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CanceledTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  FK_UserTo?: UserCreateNestedOneWithoutFK_FriendshipsAcceptedInput | undefined;
}

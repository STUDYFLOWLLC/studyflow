import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_FriendshipsAcceptedInput } from "../inputs/UserUpdateOneWithoutFK_FriendshipsAcceptedInput";
import { UserUpdateOneWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserUpdateOneWithoutFK_FriendshipsInitiatedInput";

@TypeGraphQL.InputType("FriendshipUpdateInput", {
  isAbstract: true
})
export class FriendshipUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FriendshipID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  SentTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  AcceptedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  RejectedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  RemovedTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CanceledTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  FK_UserFrom?: UserUpdateOneWithoutFK_FriendshipsInitiatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FriendshipsAcceptedInput, {
    nullable: true
  })
  FK_UserTo?: UserUpdateOneWithoutFK_FriendshipsAcceptedInput | undefined;
}

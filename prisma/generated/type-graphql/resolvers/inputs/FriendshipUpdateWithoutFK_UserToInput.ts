import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_FriendshipsInitiatedInput } from "../inputs/UserUpdateOneWithoutFK_FriendshipsInitiatedInput";

@TypeGraphQL.InputType("FriendshipUpdateWithoutFK_UserToInput", {
  isAbstract: true
})
export class FriendshipUpdateWithoutFK_UserToInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FriendshipsInitiatedInput, {
    nullable: true
  })
  FK_UserFrom?: UserUpdateOneWithoutFK_FriendshipsInitiatedInput | undefined;
}

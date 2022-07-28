import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput";
import { UserUpdateOneWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserUpdateOneWithoutFK_UserOnStudyGroupsInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  SendDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  AcceptDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  RemoveDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_UserOnStudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  FK_StudyGroup?: StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput | undefined;
}

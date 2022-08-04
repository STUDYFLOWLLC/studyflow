import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput } from "../inputs/StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  SendTime?: DateTimeFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput, {
    nullable: true
  })
  FK_StudyGroup?: StudyGroupUpdateOneWithoutFK_UserOnStudyGroupInput | undefined;
}

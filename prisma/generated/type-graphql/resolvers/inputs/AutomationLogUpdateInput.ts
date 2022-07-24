import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CourseOnTermAutomationUpdateOneRequiredWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationUpdateOneRequiredWithoutAutomationLogInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AutomationLogUpdateInput", {
  isAbstract: true
})
export class AutomationLogUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  Time?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  Success?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  Message?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  FileID?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateOneRequiredWithoutAutomationLogInput, {
    nullable: true
  })
  FK_CourseOnTermAutomation?: CourseOnTermAutomationUpdateOneRequiredWithoutAutomationLogInput | undefined;
}

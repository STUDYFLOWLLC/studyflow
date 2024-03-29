import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumFlowTypeFieldUpdateOperationsInput } from "../inputs/EnumFlowTypeFieldUpdateOperationsInput";
import { EnumRepetitionTypeFieldUpdateOperationsInput } from "../inputs/EnumRepetitionTypeFieldUpdateOperationsInput";
import { EnumVisibilityFieldUpdateOperationsInput } from "../inputs/EnumVisibilityFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateManyMutationInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FolderID?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultType?: EnumFlowTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRepetitionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  DefaultRepetitionType?: EnumRepetitionTypeFieldUpdateOperationsInput | undefined;
}

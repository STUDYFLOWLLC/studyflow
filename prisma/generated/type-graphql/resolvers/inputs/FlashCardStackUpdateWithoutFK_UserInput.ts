import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlashCardUpdateManyWithoutFK_FlashCardStackInput } from "../inputs/FlashCardUpdateManyWithoutFK_FlashCardStackInput";
import { FlowUpdateOneWithoutFK_FlashCardStacksInput } from "../inputs/FlowUpdateOneWithoutFK_FlashCardStacksInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("FlashCardStackUpdateWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackUpdateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardUpdateManyWithoutFK_FlashCardStackInput, {
    nullable: true
  })
  FlashCards?: FlashCardUpdateManyWithoutFK_FlashCardStackInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;
}

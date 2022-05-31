import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateOneWithoutFK_FlashCardStacksInput } from "../inputs/FlowUpdateOneWithoutFK_FlashCardStacksInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFK_FlashCardStacksInput } from "../inputs/UserUpdateOneWithoutFK_FlashCardStacksInput";

@TypeGraphQL.InputType("FlashCardStackUpdateWithoutFK_FlashcardsInput", {
  isAbstract: true
})
export class FlashCardStackUpdateWithoutFK_FlashcardsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  CreatedTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  FK_Flow?: FlowUpdateOneWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  FK_User?: UserUpdateOneWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;
}

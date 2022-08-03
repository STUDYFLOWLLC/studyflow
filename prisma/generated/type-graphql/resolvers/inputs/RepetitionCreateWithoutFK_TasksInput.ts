import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateNestedOneWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateNestedOneWithoutFK_RepetitionInput";
import { FlowCreateNestedOneWithoutFK_RepetitionsInput } from "../inputs/FlowCreateNestedOneWithoutFK_RepetitionsInput";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("RepetitionCreateWithoutFK_TasksInput", {
  isAbstract: true
})
export class RepetitionCreateWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RepetitionID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  RepetitionType?: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_RepetitionsInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_RepetitionsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateNestedOneWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackCreateNestedOneWithoutFK_RepetitionInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateNestedOneWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateNestedOneWithoutFK_RepetitionInput";
import { FlowCreateNestedOneWithoutRepetitionInput } from "../inputs/FlowCreateNestedOneWithoutRepetitionInput";

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

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutRepetitionInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutRepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateNestedOneWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackCreateNestedOneWithoutFK_RepetitionInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateNestedOneWithoutFK_RepetitionInput } from "../inputs/FlashcardStackCreateNestedOneWithoutFK_RepetitionInput";
import { TaskCreateNestedManyWithoutFK_RepetitionInput } from "../inputs/TaskCreateNestedManyWithoutFK_RepetitionInput";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("RepetitionCreateWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionCreateWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RepetitionID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  RepetitionType?: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateNestedOneWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackCreateNestedOneWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_Tasks?: TaskCreateNestedManyWithoutFK_RepetitionInput | undefined;
}

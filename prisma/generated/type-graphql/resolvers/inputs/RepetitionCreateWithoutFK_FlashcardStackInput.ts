import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedOneWithoutFK_RepetitionsInput } from "../inputs/FlowCreateNestedOneWithoutFK_RepetitionsInput";
import { TaskCreateNestedManyWithoutFK_RepetitionInput } from "../inputs/TaskCreateNestedManyWithoutFK_RepetitionInput";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("RepetitionCreateWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class RepetitionCreateWithoutFK_FlashcardStackInput {
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

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_RepetitionInput, {
    nullable: true
  })
  FK_Tasks?: TaskCreateNestedManyWithoutFK_RepetitionInput | undefined;
}

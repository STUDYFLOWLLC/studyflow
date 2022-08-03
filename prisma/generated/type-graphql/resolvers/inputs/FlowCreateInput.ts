import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedOneWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateNestedOneWithoutFK_FlowsInput";
import { FlashcardStackCreateNestedManyWithoutFK_FlowInput } from "../inputs/FlashcardStackCreateNestedManyWithoutFK_FlowInput";
import { FlowViewCreateNestedManyWithoutFK_FlowInput } from "../inputs/FlowViewCreateNestedManyWithoutFK_FlowInput";
import { RepetitionCreateNestedManyWithoutFK_FlowInput } from "../inputs/RepetitionCreateNestedManyWithoutFK_FlowInput";
import { TaskCreateNestedManyWithoutFK_FlowInput } from "../inputs/TaskCreateNestedManyWithoutFK_FlowInput";
import { UserCreateNestedOneWithoutFK_FlowInput } from "../inputs/UserCreateNestedOneWithoutFK_FlowInput";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("FlowCreateInput", {
  isAbstract: true
})
export class FlowCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlowID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastOpened?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UserEnteredDate?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: false
  })
  Type!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Trashed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  WasAutomated?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermCreateNestedOneWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlashcardStacks?: FlashcardStackCreateNestedManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_Tasks?: TaskCreateNestedManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlowView?: FlowViewCreateNestedManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FlowInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  Repetition?: RepetitionCreateNestedManyWithoutFK_FlowInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateNestedManyWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateNestedManyWithoutFK_FlowInput";
import { TaskCreateNestedManyWithoutFK_FlowInput } from "../inputs/TaskCreateNestedManyWithoutFK_FlowInput";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("FlowCreateWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowCreateWithoutFK_CourseOnTermInput {
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
  UserEnteredDate?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: false
  })
  Type!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackCreateNestedManyWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_Tasks?: TaskCreateNestedManyWithoutFK_FlowInput | undefined;
}

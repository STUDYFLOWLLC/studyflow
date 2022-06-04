import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateNestedOneWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateNestedOneWithoutFK_FlowsInput";
import { FlashCardStackCreateNestedManyWithoutFK_FlowInput } from "../inputs/FlashCardStackCreateNestedManyWithoutFK_FlowInput";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("FlowCreateInput", {
  isAbstract: true
})
export class FlowCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackCreateNestedManyWithoutFK_FlowInput | undefined;

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

  @TypeGraphQL.Field(_type => CourseOnTermCreateNestedOneWithoutFK_FlowsInput, {
    nullable: true
  })
  CourseOnTerm?: CourseOnTermCreateNestedOneWithoutFK_FlowsInput | undefined;
}

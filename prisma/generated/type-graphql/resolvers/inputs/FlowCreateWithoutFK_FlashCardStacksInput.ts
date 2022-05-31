import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput";
import { UserCreateNestedOneWithoutFK_FlowsInput } from "../inputs/UserCreateNestedOneWithoutFK_FlowsInput";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("FlowCreateWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class FlowCreateWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput, {
    nullable: true
  })
  FK_Tags?: FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput | undefined;

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
}

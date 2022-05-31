import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateNestedOneWithoutFK_FlowsInput } from "../inputs/FlowTagCreateNestedOneWithoutFK_FlowsInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateNestedOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_FlowTag?: FlowTagCreateNestedOneWithoutFK_FlowsInput | undefined;
}

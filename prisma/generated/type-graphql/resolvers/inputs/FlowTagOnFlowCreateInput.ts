import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedOneWithoutFK_TagsInput } from "../inputs/FlowCreateNestedOneWithoutFK_TagsInput";
import { FlowTagCreateNestedOneWithoutFK_FlowsInput } from "../inputs/FlowTagCreateNestedOneWithoutFK_FlowsInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_TagsInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_TagsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateNestedOneWithoutFK_FlowsInput, {
    nullable: true
  })
  FK_FlowTag?: FlowTagCreateNestedOneWithoutFK_FlowsInput | undefined;
}

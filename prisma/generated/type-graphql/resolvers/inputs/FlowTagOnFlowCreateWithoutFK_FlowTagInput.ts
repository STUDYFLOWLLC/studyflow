import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateNestedOneWithoutFK_TagsInput } from "../inputs/FlowCreateNestedOneWithoutFK_TagsInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_TagsInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_TagsInput | undefined;
}

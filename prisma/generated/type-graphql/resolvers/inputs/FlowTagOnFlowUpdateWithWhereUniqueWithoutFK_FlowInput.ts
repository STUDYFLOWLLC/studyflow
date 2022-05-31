import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowUpdateWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowUpdateWithoutFK_FlowInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  data!: FlowTagOnFlowUpdateWithoutFK_FlowInput;
}

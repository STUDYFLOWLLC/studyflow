import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowUpdateWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowUpdateWithoutFK_FlowTagInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateWithoutFK_FlowTagInput, {
    nullable: false
  })
  data!: FlowTagOnFlowUpdateWithoutFK_FlowTagInput;
}

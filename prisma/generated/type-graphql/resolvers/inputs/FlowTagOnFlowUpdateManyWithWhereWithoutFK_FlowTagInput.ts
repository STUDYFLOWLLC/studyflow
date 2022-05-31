import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowScalarWhereInput } from "../inputs/FlowTagOnFlowScalarWhereInput";
import { FlowTagOnFlowUpdateManyMutationInput } from "../inputs/FlowTagOnFlowUpdateManyMutationInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowScalarWhereInput, {
    nullable: false
  })
  where!: FlowTagOnFlowScalarWhereInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowTagOnFlowUpdateManyMutationInput;
}

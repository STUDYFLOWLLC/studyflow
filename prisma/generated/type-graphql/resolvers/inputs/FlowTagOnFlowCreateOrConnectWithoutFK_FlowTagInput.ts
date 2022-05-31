import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowTagInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateWithoutFK_FlowTagInput, {
    nullable: false
  })
  create!: FlowTagOnFlowCreateWithoutFK_FlowTagInput;
}

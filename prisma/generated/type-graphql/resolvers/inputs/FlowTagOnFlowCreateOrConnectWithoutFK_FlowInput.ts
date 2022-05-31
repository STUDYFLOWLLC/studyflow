import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlowTagOnFlowCreateWithoutFK_FlowInput;
}

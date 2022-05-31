import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowTagInput";
import { FlowTagOnFlowUpdateWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowUpdateWithoutFK_FlowTagInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateWithoutFK_FlowTagInput, {
    nullable: false
  })
  update!: FlowTagOnFlowUpdateWithoutFK_FlowTagInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateWithoutFK_FlowTagInput, {
    nullable: false
  })
  create!: FlowTagOnFlowCreateWithoutFK_FlowTagInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowInput";
import { FlowTagOnFlowUpdateWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowUpdateWithoutFK_FlowInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  update!: FlowTagOnFlowUpdateWithoutFK_FlowInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlowTagOnFlowCreateWithoutFK_FlowInput;
}

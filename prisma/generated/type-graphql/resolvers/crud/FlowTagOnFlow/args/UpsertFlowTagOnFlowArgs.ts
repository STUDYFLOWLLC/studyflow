import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowCreateInput } from "../../../inputs/FlowTagOnFlowCreateInput";
import { FlowTagOnFlowUpdateInput } from "../../../inputs/FlowTagOnFlowUpdateInput";
import { FlowTagOnFlowWhereUniqueInput } from "../../../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateInput, {
    nullable: false
  })
  create!: FlowTagOnFlowCreateInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateInput, {
    nullable: false
  })
  update!: FlowTagOnFlowUpdateInput;
}

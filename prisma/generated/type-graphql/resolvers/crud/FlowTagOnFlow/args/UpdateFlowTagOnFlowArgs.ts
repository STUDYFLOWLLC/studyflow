import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowUpdateInput } from "../../../inputs/FlowTagOnFlowUpdateInput";
import { FlowTagOnFlowWhereUniqueInput } from "../../../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateInput, {
    nullable: false
  })
  data!: FlowTagOnFlowUpdateInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;
}

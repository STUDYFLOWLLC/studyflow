import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowUpdateManyMutationInput } from "../../../inputs/FlowTagOnFlowUpdateManyMutationInput";
import { FlowTagOnFlowWhereInput } from "../../../inputs/FlowTagOnFlowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowTagOnFlowUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  where?: FlowTagOnFlowWhereInput | undefined;
}

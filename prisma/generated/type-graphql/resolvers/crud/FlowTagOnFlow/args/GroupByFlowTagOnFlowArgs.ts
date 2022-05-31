import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowOrderByWithAggregationInput } from "../../../inputs/FlowTagOnFlowOrderByWithAggregationInput";
import { FlowTagOnFlowScalarWhereWithAggregatesInput } from "../../../inputs/FlowTagOnFlowScalarWhereWithAggregatesInput";
import { FlowTagOnFlowWhereInput } from "../../../inputs/FlowTagOnFlowWhereInput";
import { FlowTagOnFlowScalarFieldEnum } from "../../../../enums/FlowTagOnFlowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  where?: FlowTagOnFlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlowTagOnFlowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlowTagOnFlowID" | "HOLDER" | "FK_FlowID" | "FK_FlowTagID">;

  @TypeGraphQL.Field(_type => FlowTagOnFlowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlowTagOnFlowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

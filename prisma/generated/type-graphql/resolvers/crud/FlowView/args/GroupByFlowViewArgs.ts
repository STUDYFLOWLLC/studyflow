import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewOrderByWithAggregationInput } from "../../../inputs/FlowViewOrderByWithAggregationInput";
import { FlowViewScalarWhereWithAggregatesInput } from "../../../inputs/FlowViewScalarWhereWithAggregatesInput";
import { FlowViewWhereInput } from "../../../inputs/FlowViewWhereInput";
import { FlowViewScalarFieldEnum } from "../../../../enums/FlowViewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  where?: FlowViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowViewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlowViewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlowViewID" | "CreatedTime" | "FK_FlowID" | "FK_UserID">;

  @TypeGraphQL.Field(_type => FlowViewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlowViewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

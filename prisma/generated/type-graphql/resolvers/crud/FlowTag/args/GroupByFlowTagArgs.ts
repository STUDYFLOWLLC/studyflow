import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOrderByWithAggregationInput } from "../../../inputs/FlowTagOrderByWithAggregationInput";
import { FlowTagScalarWhereWithAggregatesInput } from "../../../inputs/FlowTagScalarWhereWithAggregatesInput";
import { FlowTagWhereInput } from "../../../inputs/FlowTagWhereInput";
import { FlowTagScalarFieldEnum } from "../../../../enums/FlowTagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  where?: FlowTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlowTagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlowTagID" | "CreatedTime" | "FK_UserID" | "Public" | "Name">;

  @TypeGraphQL.Field(_type => FlowTagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlowTagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

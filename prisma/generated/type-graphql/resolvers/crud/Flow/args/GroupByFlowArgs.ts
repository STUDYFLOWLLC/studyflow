import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowOrderByWithAggregationInput } from "../../../inputs/FlowOrderByWithAggregationInput";
import { FlowScalarWhereWithAggregatesInput } from "../../../inputs/FlowScalarWhereWithAggregatesInput";
import { FlowWhereInput } from "../../../inputs/FlowWhereInput";
import { FlowScalarFieldEnum } from "../../../../enums/FlowScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlowArgs {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlowOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlowID" | "CreatedTime" | "LastOpened" | "UserEnteredDate" | "Type" | "Title" | "Trashed" | "Visibility" | "WasAutomated" | "Body" | "FK_CourseOnTermID" | "FK_UserID">;

  @TypeGraphQL.Field(_type => FlowScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlowScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

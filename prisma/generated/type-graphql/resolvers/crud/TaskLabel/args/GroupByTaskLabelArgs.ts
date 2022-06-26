import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelOrderByWithAggregationInput } from "../../../inputs/TaskLabelOrderByWithAggregationInput";
import { TaskLabelScalarWhereWithAggregatesInput } from "../../../inputs/TaskLabelScalarWhereWithAggregatesInput";
import { TaskLabelWhereInput } from "../../../inputs/TaskLabelWhereInput";
import { TaskLabelScalarFieldEnum } from "../../../../enums/TaskLabelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  where?: TaskLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TaskLabelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"TaskLabelID" | "CreatedTime" | "Label" | "FK_TaskID">;

  @TypeGraphQL.Field(_type => TaskLabelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TaskLabelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogOrderByWithAggregationInput } from "../../../inputs/AutomationLogOrderByWithAggregationInput";
import { AutomationLogScalarWhereWithAggregatesInput } from "../../../inputs/AutomationLogScalarWhereWithAggregatesInput";
import { AutomationLogWhereInput } from "../../../inputs/AutomationLogWhereInput";
import { AutomationLogScalarFieldEnum } from "../../../../enums/AutomationLogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  where?: AutomationLogWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AutomationLogOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"AutomationLogID" | "Time" | "Success" | "Message" | "FK_CourseOnTermAutomationID">;

  @TypeGraphQL.Field(_type => AutomationLogScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AutomationLogScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

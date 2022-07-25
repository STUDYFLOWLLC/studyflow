import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationOrderByWithAggregationInput } from "../../../inputs/AutomationOrderByWithAggregationInput";
import { AutomationScalarWhereWithAggregatesInput } from "../../../inputs/AutomationScalarWhereWithAggregatesInput";
import { AutomationWhereInput } from "../../../inputs/AutomationWhereInput";
import { AutomationScalarFieldEnum } from "../../../../enums/AutomationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  where?: AutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AutomationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AutomationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"AutomationID" | "RefreshToken" | "FK_UserID">;

  @TypeGraphQL.Field(_type => AutomationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AutomationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

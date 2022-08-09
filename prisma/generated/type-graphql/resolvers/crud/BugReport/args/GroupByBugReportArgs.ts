import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportOrderByWithAggregationInput } from "../../../inputs/BugReportOrderByWithAggregationInput";
import { BugReportScalarWhereWithAggregatesInput } from "../../../inputs/BugReportScalarWhereWithAggregatesInput";
import { BugReportWhereInput } from "../../../inputs/BugReportWhereInput";
import { BugReportScalarFieldEnum } from "../../../../enums/BugReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  where?: BugReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BugReportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BugReportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"BugReportID" | "CreatedTime" | "DeletedTime" | "FixedTime" | "FK_UserID" | "Title" | "Body">;

  @TypeGraphQL.Field(_type => BugReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BugReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

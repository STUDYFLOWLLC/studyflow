import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportCreateInput } from "../../../inputs/BugReportCreateInput";
import { BugReportUpdateInput } from "../../../inputs/BugReportUpdateInput";
import { BugReportWhereUniqueInput } from "../../../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: false
  })
  where!: BugReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugReportCreateInput, {
    nullable: false
  })
  create!: BugReportCreateInput;

  @TypeGraphQL.Field(_type => BugReportUpdateInput, {
    nullable: false
  })
  update!: BugReportUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportUpdateInput } from "../../../inputs/BugReportUpdateInput";
import { BugReportWhereUniqueInput } from "../../../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportUpdateInput, {
    nullable: false
  })
  data!: BugReportUpdateInput;

  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: false
  })
  where!: BugReportWhereUniqueInput;
}

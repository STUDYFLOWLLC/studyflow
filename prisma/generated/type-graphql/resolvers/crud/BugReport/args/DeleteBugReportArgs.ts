import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportWhereUniqueInput } from "../../../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: false
  })
  where!: BugReportWhereUniqueInput;
}

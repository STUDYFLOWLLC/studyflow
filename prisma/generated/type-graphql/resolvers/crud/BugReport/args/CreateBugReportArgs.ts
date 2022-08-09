import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportCreateInput } from "../../../inputs/BugReportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportCreateInput, {
    nullable: false
  })
  data!: BugReportCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportWhereInput } from "../../../inputs/BugReportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  where?: BugReportWhereInput | undefined;
}

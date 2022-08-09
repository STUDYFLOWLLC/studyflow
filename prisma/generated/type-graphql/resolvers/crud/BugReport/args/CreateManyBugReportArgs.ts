import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportCreateManyInput } from "../../../inputs/BugReportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBugReportArgs {
  @TypeGraphQL.Field(_type => [BugReportCreateManyInput], {
    nullable: false
  })
  data!: BugReportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

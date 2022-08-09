import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportUpdateManyMutationInput } from "../../../inputs/BugReportUpdateManyMutationInput";
import { BugReportWhereInput } from "../../../inputs/BugReportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: BugReportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  where?: BugReportWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogCreateInput } from "../../../inputs/AutomationLogCreateInput";
import { AutomationLogUpdateInput } from "../../../inputs/AutomationLogUpdateInput";
import { AutomationLogWhereUniqueInput } from "../../../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationLogWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationLogCreateInput, {
    nullable: false
  })
  create!: AutomationLogCreateInput;

  @TypeGraphQL.Field(_type => AutomationLogUpdateInput, {
    nullable: false
  })
  update!: AutomationLogUpdateInput;
}

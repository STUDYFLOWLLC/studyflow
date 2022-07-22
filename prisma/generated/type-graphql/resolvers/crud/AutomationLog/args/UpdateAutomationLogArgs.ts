import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogUpdateInput } from "../../../inputs/AutomationLogUpdateInput";
import { AutomationLogWhereUniqueInput } from "../../../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogUpdateInput, {
    nullable: false
  })
  data!: AutomationLogUpdateInput;

  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationLogWhereUniqueInput;
}

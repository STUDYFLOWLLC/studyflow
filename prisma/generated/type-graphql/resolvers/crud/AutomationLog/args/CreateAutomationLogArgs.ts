import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogCreateInput } from "../../../inputs/AutomationLogCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogCreateInput, {
    nullable: false
  })
  data!: AutomationLogCreateInput;
}

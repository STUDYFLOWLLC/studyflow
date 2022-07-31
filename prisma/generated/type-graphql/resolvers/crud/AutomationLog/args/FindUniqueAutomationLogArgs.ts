import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogWhereUniqueInput } from "../../../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationLogWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogWhereUniqueInput } from "../../../inputs/AutomationLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationLogWhereUniqueInput;
}

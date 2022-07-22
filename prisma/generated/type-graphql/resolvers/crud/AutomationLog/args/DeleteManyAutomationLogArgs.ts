import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogWhereInput } from "../../../inputs/AutomationLogWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  where?: AutomationLogWhereInput | undefined;
}

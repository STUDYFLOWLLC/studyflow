import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationCreateInput } from "../../../inputs/AutomationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationCreateInput, {
    nullable: false
  })
  data!: AutomationCreateInput;
}

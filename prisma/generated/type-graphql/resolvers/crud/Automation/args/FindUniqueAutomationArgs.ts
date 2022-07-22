import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationWhereUniqueInput } from "../../../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationWhereUniqueInput;
}

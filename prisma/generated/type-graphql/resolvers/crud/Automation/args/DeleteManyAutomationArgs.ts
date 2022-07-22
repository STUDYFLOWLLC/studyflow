import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationWhereInput } from "../../../inputs/AutomationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  where?: AutomationWhereInput | undefined;
}

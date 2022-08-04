import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationUpdateInput } from "../../../inputs/AutomationUpdateInput";
import { AutomationWhereUniqueInput } from "../../../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationUpdateInput, {
    nullable: false
  })
  data!: AutomationUpdateInput;

  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationWhereUniqueInput;
}

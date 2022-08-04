import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationCreateInput } from "../../../inputs/AutomationCreateInput";
import { AutomationUpdateInput } from "../../../inputs/AutomationUpdateInput";
import { AutomationWhereUniqueInput } from "../../../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: false
  })
  where!: AutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AutomationCreateInput, {
    nullable: false
  })
  create!: AutomationCreateInput;

  @TypeGraphQL.Field(_type => AutomationUpdateInput, {
    nullable: false
  })
  update!: AutomationUpdateInput;
}

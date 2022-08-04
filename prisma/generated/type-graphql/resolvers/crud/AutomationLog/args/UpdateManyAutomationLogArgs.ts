import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogUpdateManyMutationInput } from "../../../inputs/AutomationLogUpdateManyMutationInput";
import { AutomationLogWhereInput } from "../../../inputs/AutomationLogWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogUpdateManyMutationInput, {
    nullable: false
  })
  data!: AutomationLogUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  where?: AutomationLogWhereInput | undefined;
}

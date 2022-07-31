import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationUpdateManyMutationInput } from "../../../inputs/AutomationUpdateManyMutationInput";
import { AutomationWhereInput } from "../../../inputs/AutomationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationUpdateManyMutationInput, {
    nullable: false
  })
  data!: AutomationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  where?: AutomationWhereInput | undefined;
}

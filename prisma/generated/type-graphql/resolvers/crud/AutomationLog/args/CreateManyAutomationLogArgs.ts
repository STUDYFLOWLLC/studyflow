import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogCreateManyInput } from "../../../inputs/AutomationLogCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAutomationLogArgs {
  @TypeGraphQL.Field(_type => [AutomationLogCreateManyInput], {
    nullable: false
  })
  data!: AutomationLogCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

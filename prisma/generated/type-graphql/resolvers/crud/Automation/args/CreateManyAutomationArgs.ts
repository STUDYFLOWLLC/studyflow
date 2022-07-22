import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationCreateManyInput } from "../../../inputs/AutomationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAutomationArgs {
  @TypeGraphQL.Field(_type => [AutomationCreateManyInput], {
    nullable: false
  })
  data!: AutomationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

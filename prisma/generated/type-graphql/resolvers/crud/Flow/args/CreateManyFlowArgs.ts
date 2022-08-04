import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowCreateManyInput } from "../../../inputs/FlowCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFlowArgs {
  @TypeGraphQL.Field(_type => [FlowCreateManyInput], {
    nullable: false
  })
  data!: FlowCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

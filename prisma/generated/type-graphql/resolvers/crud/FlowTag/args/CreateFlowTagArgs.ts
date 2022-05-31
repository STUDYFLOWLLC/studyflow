import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagCreateInput } from "../../../inputs/FlowTagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagCreateInput, {
    nullable: false
  })
  data!: FlowTagCreateInput;
}

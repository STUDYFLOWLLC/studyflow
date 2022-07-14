import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewCreateInput } from "../../../inputs/FlowViewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewCreateInput, {
    nullable: false
  })
  data!: FlowViewCreateInput;
}

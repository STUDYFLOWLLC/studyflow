import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowCreateInput } from "../../../inputs/FlowTagOnFlowCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateInput, {
    nullable: false
  })
  data!: FlowTagOnFlowCreateInput;
}

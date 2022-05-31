import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowWhereUniqueInput } from "../../../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagOnFlowWhereUniqueInput;
}

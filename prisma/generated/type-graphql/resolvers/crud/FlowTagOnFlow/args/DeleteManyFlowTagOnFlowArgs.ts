import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowWhereInput } from "../../../inputs/FlowTagOnFlowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  where?: FlowTagOnFlowWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowWhereInput } from "../../../inputs/FlowWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlowArgs {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;
}

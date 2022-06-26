import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowWhereUniqueInput } from "../../../inputs/FlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlowArgs {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewWhereUniqueInput } from "../../../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;
}

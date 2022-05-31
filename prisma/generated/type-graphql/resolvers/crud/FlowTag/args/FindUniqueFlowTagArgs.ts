import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagWhereUniqueInput } from "../../../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewUpdateInput } from "../../../inputs/FlowViewUpdateInput";
import { FlowViewWhereUniqueInput } from "../../../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewUpdateInput, {
    nullable: false
  })
  data!: FlowViewUpdateInput;

  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;
}

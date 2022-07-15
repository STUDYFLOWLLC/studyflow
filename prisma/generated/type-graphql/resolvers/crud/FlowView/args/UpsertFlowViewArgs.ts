import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewCreateInput } from "../../../inputs/FlowViewCreateInput";
import { FlowViewUpdateInput } from "../../../inputs/FlowViewUpdateInput";
import { FlowViewWhereUniqueInput } from "../../../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewCreateInput, {
    nullable: false
  })
  create!: FlowViewCreateInput;

  @TypeGraphQL.Field(_type => FlowViewUpdateInput, {
    nullable: false
  })
  update!: FlowViewUpdateInput;
}

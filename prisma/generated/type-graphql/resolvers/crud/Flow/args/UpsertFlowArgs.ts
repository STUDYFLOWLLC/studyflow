import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowCreateInput } from "../../../inputs/FlowCreateInput";
import { FlowUpdateInput } from "../../../inputs/FlowUpdateInput";
import { FlowWhereUniqueInput } from "../../../inputs/FlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlowArgs {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateInput, {
    nullable: false
  })
  create!: FlowCreateInput;

  @TypeGraphQL.Field(_type => FlowUpdateInput, {
    nullable: false
  })
  update!: FlowUpdateInput;
}

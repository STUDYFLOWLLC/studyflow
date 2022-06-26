import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowUpdateInput } from "../../../inputs/FlowUpdateInput";
import { FlowWhereUniqueInput } from "../../../inputs/FlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlowArgs {
  @TypeGraphQL.Field(_type => FlowUpdateInput, {
    nullable: false
  })
  data!: FlowUpdateInput;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;
}

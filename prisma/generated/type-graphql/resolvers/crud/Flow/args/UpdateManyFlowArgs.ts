import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowUpdateManyMutationInput } from "../../../inputs/FlowUpdateManyMutationInput";
import { FlowWhereInput } from "../../../inputs/FlowWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlowArgs {
  @TypeGraphQL.Field(_type => FlowUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;
}

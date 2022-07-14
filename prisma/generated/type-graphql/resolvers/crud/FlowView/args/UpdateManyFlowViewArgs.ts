import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewUpdateManyMutationInput } from "../../../inputs/FlowViewUpdateManyMutationInput";
import { FlowViewWhereInput } from "../../../inputs/FlowViewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowViewUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  where?: FlowViewWhereInput | undefined;
}

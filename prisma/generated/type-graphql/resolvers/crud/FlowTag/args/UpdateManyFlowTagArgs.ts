import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagUpdateManyMutationInput } from "../../../inputs/FlowTagUpdateManyMutationInput";
import { FlowTagWhereInput } from "../../../inputs/FlowTagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowTagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  where?: FlowTagWhereInput | undefined;
}

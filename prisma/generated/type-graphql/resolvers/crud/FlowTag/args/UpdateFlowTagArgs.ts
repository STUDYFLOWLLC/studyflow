import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagUpdateInput } from "../../../inputs/FlowTagUpdateInput";
import { FlowTagWhereUniqueInput } from "../../../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagUpdateInput, {
    nullable: false
  })
  data!: FlowTagUpdateInput;

  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;
}

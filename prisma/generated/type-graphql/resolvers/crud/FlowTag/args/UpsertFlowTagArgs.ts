import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagCreateInput } from "../../../inputs/FlowTagCreateInput";
import { FlowTagUpdateInput } from "../../../inputs/FlowTagUpdateInput";
import { FlowTagWhereUniqueInput } from "../../../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagCreateInput, {
    nullable: false
  })
  create!: FlowTagCreateInput;

  @TypeGraphQL.Field(_type => FlowTagUpdateInput, {
    nullable: false
  })
  update!: FlowTagUpdateInput;
}

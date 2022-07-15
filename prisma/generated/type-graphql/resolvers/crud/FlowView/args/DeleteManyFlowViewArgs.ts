import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewWhereInput } from "../../../inputs/FlowViewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  where?: FlowViewWhereInput | undefined;
}

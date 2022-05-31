import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagWhereInput } from "../../../inputs/FlowTagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  where?: FlowTagWhereInput | undefined;
}

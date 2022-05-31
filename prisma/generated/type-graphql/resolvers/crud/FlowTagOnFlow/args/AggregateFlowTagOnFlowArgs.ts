import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOnFlowOrderByWithRelationInput } from "../../../inputs/FlowTagOnFlowOrderByWithRelationInput";
import { FlowTagOnFlowWhereInput } from "../../../inputs/FlowTagOnFlowWhereInput";
import { FlowTagOnFlowWhereUniqueInput } from "../../../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlowTagOnFlowArgs {
  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereInput, {
    nullable: true
  })
  where?: FlowTagOnFlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlowTagOnFlowOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlowTagOnFlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

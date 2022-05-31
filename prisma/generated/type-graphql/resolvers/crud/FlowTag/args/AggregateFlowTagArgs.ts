import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowTagOrderByWithRelationInput } from "../../../inputs/FlowTagOrderByWithRelationInput";
import { FlowTagWhereInput } from "../../../inputs/FlowTagWhereInput";
import { FlowTagWhereUniqueInput } from "../../../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlowTagArgs {
  @TypeGraphQL.Field(_type => FlowTagWhereInput, {
    nullable: true
  })
  where?: FlowTagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlowTagOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlowTagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

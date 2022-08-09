import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestOrderByWithRelationInput } from "../../../inputs/FeatureRequestOrderByWithRelationInput";
import { FeatureRequestWhereInput } from "../../../inputs/FeatureRequestWhereInput";
import { FeatureRequestWhereUniqueInput } from "../../../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  where?: FeatureRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FeatureRequestOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: FeatureRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestOrderByWithAggregationInput } from "../../../inputs/FeatureRequestOrderByWithAggregationInput";
import { FeatureRequestScalarWhereWithAggregatesInput } from "../../../inputs/FeatureRequestScalarWhereWithAggregatesInput";
import { FeatureRequestWhereInput } from "../../../inputs/FeatureRequestWhereInput";
import { FeatureRequestScalarFieldEnum } from "../../../../enums/FeatureRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  where?: FeatureRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FeatureRequestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FeatureRequestID" | "CreatedTime" | "DeletedTime" | "ImplementedTime" | "FK_UserID" | "Title" | "Body">;

  @TypeGraphQL.Field(_type => FeatureRequestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FeatureRequestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

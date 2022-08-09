import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestCreateInput } from "../../../inputs/FeatureRequestCreateInput";
import { FeatureRequestUpdateInput } from "../../../inputs/FeatureRequestUpdateInput";
import { FeatureRequestWhereUniqueInput } from "../../../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureRequestCreateInput, {
    nullable: false
  })
  create!: FeatureRequestCreateInput;

  @TypeGraphQL.Field(_type => FeatureRequestUpdateInput, {
    nullable: false
  })
  update!: FeatureRequestUpdateInput;
}

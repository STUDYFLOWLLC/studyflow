import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestUpdateInput } from "../../../inputs/FeatureRequestUpdateInput";
import { FeatureRequestWhereUniqueInput } from "../../../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestUpdateInput, {
    nullable: false
  })
  data!: FeatureRequestUpdateInput;

  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureRequestWhereUniqueInput;
}

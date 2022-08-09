import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestUpdateManyMutationInput } from "../../../inputs/FeatureRequestUpdateManyMutationInput";
import { FeatureRequestWhereInput } from "../../../inputs/FeatureRequestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: FeatureRequestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  where?: FeatureRequestWhereInput | undefined;
}

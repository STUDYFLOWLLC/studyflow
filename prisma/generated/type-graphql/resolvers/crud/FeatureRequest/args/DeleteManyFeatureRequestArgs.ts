import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestWhereInput } from "../../../inputs/FeatureRequestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  where?: FeatureRequestWhereInput | undefined;
}

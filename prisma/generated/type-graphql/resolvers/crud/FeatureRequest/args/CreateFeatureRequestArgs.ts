import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestCreateInput } from "../../../inputs/FeatureRequestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestCreateInput, {
    nullable: false
  })
  data!: FeatureRequestCreateInput;
}

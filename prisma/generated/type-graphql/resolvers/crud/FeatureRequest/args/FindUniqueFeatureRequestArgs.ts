import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestWhereUniqueInput } from "../../../inputs/FeatureRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureRequestWhereUniqueInput;
}

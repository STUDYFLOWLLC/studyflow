import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestCreateManyInput } from "../../../inputs/FeatureRequestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFeatureRequestArgs {
  @TypeGraphQL.Field(_type => [FeatureRequestCreateManyInput], {
    nullable: false
  })
  data!: FeatureRequestCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

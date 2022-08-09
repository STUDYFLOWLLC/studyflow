import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestWhereInput } from "../inputs/FeatureRequestWhereInput";

@TypeGraphQL.InputType("FeatureRequestListRelationFilter", {
  isAbstract: true
})
export class FeatureRequestListRelationFilter {
  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  every?: FeatureRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  some?: FeatureRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  none?: FeatureRequestWhereInput | undefined;
}

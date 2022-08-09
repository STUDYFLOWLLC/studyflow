import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("FeatureRequestWhereUniqueInput", {
  isAbstract: true
})
export class FeatureRequestWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FeatureRequestID?: string | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureRequestScalarWhereInput } from "../inputs/FeatureRequestScalarWhereInput";
import { FeatureRequestUpdateManyMutationInput } from "../inputs/FeatureRequestUpdateManyMutationInput";

@TypeGraphQL.InputType("FeatureRequestUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class FeatureRequestUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FeatureRequestScalarWhereInput, {
    nullable: false
  })
  where!: FeatureRequestScalarWhereInput;

  @TypeGraphQL.Field(_type => FeatureRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: FeatureRequestUpdateManyMutationInput;
}
